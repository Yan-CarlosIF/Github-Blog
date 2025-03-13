import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface LinkComponentProps {
  content: string;
  profileName: string;
  repoName?: string;
}

const LinkComponent = ({
  profileName,
  content,
  repoName,
}: LinkComponentProps) => {
  const link = repoName ? `/${profileName}/${repoName}` : `/${profileName}`;

  return (
    <a
      className="border-1 border-transparent hover:border-b-[var(--blue)] transition-colors duration-200 ease-in-out"
      href={`https://github.com/${link}`}
      target="_blank"
    >
      <div className="flex items-center gap-2">
        <span className="text-[var(--blue)] font-bold text-xs">{content}</span>
        <FontAwesomeIcon
          icon={faArrowUpRightFromSquare}
          color="#3294f8"
          size="xs"
        />
      </div>
    </a>
  );
};

export default LinkComponent;
