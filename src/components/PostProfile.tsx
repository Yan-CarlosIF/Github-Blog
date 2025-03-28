import { Link, useNavigate } from "react-router-dom";
import LinkComponent from "./LinkComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faCalendarDay,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import Info from "./Info";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";
import { GithubRepo } from "../types/profile";
import { differenceInDays } from "date-fns";

interface postProfileProps {
  profile: string;
  repoName: string;
}
const PostProfile = ({ profile, repoName }: postProfileProps) => {
  const navigate = useNavigate();
  const [repo, setRepo] = useState<GithubRepo>({} as GithubRepo);
  const time = differenceInDays(new Date(), new Date(repo.created_at));

  useEffect(() => {
    fetch(`https://api.github.com/repos/${profile}/${repoName}`)
      .then((response) => response.json())
      .then((data) => (data.status === "404" ? navigate("*") : setRepo(data)));
  }, [profile, repoName, navigate]);

  return (
    <div className="bg-[var(--base-profile)] flex flex-col justify-items-start w-[350px] sm:w-[680px] lg:w-[864px] h-[168px] rounded-[10px] object-cover mt-[-100px] px-8 py-6">
      <div className="flex justify-between gap-6 w-full h-5 text-[var(--blue)]">
        <Link
          className="border-1 border-transparent hover:border-b-[var(--blue)] transition-colors duration-200 ease-in-out"
          to={`/Blog/${profile}`}
        >
          <div className="flex items-center justify-center gap-2">
            <FontAwesomeIcon icon={faChevronLeft} />
            <span className="text-[var(--blue)] font-bold text-xs">VOLTAR</span>
          </div>
        </Link>
        <LinkComponent
          profileName={profile}
          repoName={repo.name}
          content="VER NO GITHUB"
        />
      </div>

      <h1 className="text-[var(--base-title)] text-xl font-bold mt-2">
        {repo.name}
      </h1>

      {repo.description && (
        <p className="text-[var(--base-text)] text-sm text-ellipsis line-clamp-1 mt-2">
          {repo.description}
        </p>
      )}

      <div className="flex text-[var(--base-span)] gap-6 mt-auto">
        <Info content={profile} icon={faGithub} color="#3a536b" />
        <Info
          content={
            time < 1 ? "Hoje" : `Há ${time} ${time > 1 ? "dias" : "dia"}`
          }
          icon={faCalendarDay}
          color="#3a536b"
        />
        <Info
          content={`${repo.stargazers_count} estrelas`}
          icon={faStar}
          color="#3a536b"
        />
      </div>
    </div>
  );
};

export default PostProfile;
