import { useEffect, useState } from "react";
import Header from "../assets/Cover.svg";
import Profile from "../components/Profile";
import { GithubProfile } from "../types/profile";
import { twMerge } from "tailwind-merge";

const Blog = () => {
  const [profile, setProfile] = useState<GithubProfile>({} as GithubProfile);
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    fetch("https://api.github.com/users/Yan-CarlosIF")
      .then((response) => response.json())
      .then((data) => setProfile(data));
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <img className="w-full h-[296px] object-cover" src={Header} alt="" />
      <div className="">
        <Profile profile={profile} />
        <div className="flex flex-col self-start gap-3 mt-18">
          <div className="flex items-center justify-between">
            <h2 className="text-[var(--base-subtitle)] font-bold text-lg">
              Respositórios
            </h2>
            <span className="text-[var(--base-span)] text-sm">
              {profile.public_repos} Repositórios
            </span>
          </div>
          <input
            className={twMerge(
              `p-2 rounded-md outline-none bg-[var(--base-input)] text-[var(--base-label)] border-1 border-[var(--base-border)]
              focus:border-[var(--blue)] transition-colors duration-200 ease-in-out`,
              content && "text-[var(--base-text)]"
            )}
            type="text"
            placeholder="Buscar conteúdo"
            onChange={(e) => setContent(e.target.value)}
            value={content}
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
