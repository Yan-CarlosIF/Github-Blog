import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

interface LinkComponentProps {
  content: string;
  profileName?: string;
  repoName?: string;
  toHome?: boolean;
}

const LinkComponent = ({
  profileName,
  content,
  repoName,
  toHome,
}: LinkComponentProps) => {
  const link = repoName ? `/${profileName}/${repoName}` : `/${profileName}`;
  const target = toHome ? "_self" : "_blank";

  return (
    <Link
      className="border-1 border-transparent hover:border-b-[var(--blue)] transition-colors duration-200 ease-in-out"
      to={toHome ? "/" : `https://github.com${link}`}
      target={target}
    >
      <div className="flex items-center gap-1 sm:gap-2">
        <span className="text-[var(--blue)] font-bold text-[8px] sm:text-xs">
          {content}
        </span>
        <FontAwesomeIcon
          icon={faArrowUpRightFromSquare}
          color="#3294f8"
          className="w-[8px] h-[8px] sm:w-[12px] sm:h-[12px]"
        />
      </div>
    </Link>
  );
};

export default LinkComponent;
