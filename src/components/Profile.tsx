import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Info from "./Info";

interface ProfileProps {
  profileName: string;
}

const Profile = ({ profileName }: ProfileProps) => {
  return (
    <div className="bg-[var(--base-profile)] flex justify-items-start w-[864px] h-[212px] rounded-[10px] object-cover mt-[-100px] p-8 gap-8">
      <img
        className="w-[148px] h-[148px] ml-2 rounded-lg"
        src={`https://github.com/${profileName}.png`}
        alt="Foto de Perfil"
      />

      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h1 className="text-[var(--base-title)] text-2xl font-bold">
            {profileName}
          </h1>
          <a href={`https://github.com/${profileName}`} target="_blank">
            <div className="flex items-center gap-2">
              <span className="text-[var(--blue)] font-bold text-xs">
                GITHUB
              </span>
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                color="#3294f8"
                size="xs"
              />
            </div>
          </a>
        </div>
        <span className="text-[var(--base-text)] text-base">
          Me chamo Yan, sou um estudante de Ciência da Computação, apaixonado
          por programação.
        </span>
        <div className="flex text-[var(--base-subtitle)] gap-6 mt-4">
          <Info content={profileName} icon={faGithub} />
          <Info content="Estudante" icon={faBuilding} />
          <Info content="32 seguidores" icon={faUserGroup} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
