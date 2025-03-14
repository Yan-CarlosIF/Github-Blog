import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Info from "./Info";
import { useEffect, useState } from "react";
import { GithubProfile } from "../types/profile";
import LinkComponent from "./LinkComponent";

interface ProfileProps {
  profile: GithubProfile;
}

const Profile = ({ profile }: ProfileProps) => {
  const [followers, setFollowers] = useState<number>(0);

  useEffect(() => {
    fetch(`https://api.github.com/users/${profile.login}/followers`)
      .then((response) => response.json())
      .then((data) => setFollowers(data.length));
  }, [profile.login]);

  return (
    <div className="bg-[var(--base-profile)] flex justify-items-start w-[864px] h-[212px] rounded-[10px] object-cover mt-[-100px] p-8 gap-8">
      <img
        className="w-[148px] h-[148px] ml-2 rounded-lg"
        src={`https://github.com/${profile.login}.png`}
        alt="Foto de Perfil"
      />

      <div className="flex flex-col gap-2 w-full">
        <div className="flex items-center justify-between">
          <h1 className="text-[var(--base-title)] text-2xl font-bold">
            {profile.name}
          </h1>
          <LinkComponent profileName={profile.login} content="GITHUB" />
        </div>
        <span className="text-[var(--base-text)] text-base">{profile.bio}</span>
        <div className="flex text-[var(--base-subtitle)] gap-6 mt-4">
          <Info content={profile.login} icon={faGithub} />
          <Info
            content={profile.company ? profile.company : "Cargo"}
            icon={faBuilding}
          />
          <Info content={`${followers} seguidores`} icon={faUserGroup} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
