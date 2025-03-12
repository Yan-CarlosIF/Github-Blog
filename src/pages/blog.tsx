import { useEffect, useState } from "react";
import Header from "../assets/Cover.svg";
import Profile from "../components/Profile";
import { GithubProfile, GithubRepo } from "../types/profile";
import { twMerge } from "tailwind-merge";
import Card from "../components/Card";

const PROFILE_NAME = "Yan-CarlosIF";

const Blog = () => {
  const [profile, setProfile] = useState<GithubProfile>({} as GithubProfile);
  const [content, setContent] = useState<string>("");
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [filteredRepos, setFilteredRepos] = useState<GithubRepo[] | undefined>(
    []
  );

  useEffect(() => {
    fetch(`https://api.github.com/users/${PROFILE_NAME}`)
      .then((response) => response.json())
      .then((data) => setProfile(data));
  }, []);

  useEffect(() => {
    fetch(
      `https://api.github.com/users/${PROFILE_NAME}/repos?sort=created&direction=desc`
    )
      .then((response) => response.json())
      .then((data) => setRepos(data));
  }, []);

  useEffect(() => {
    if (content) {
      const filtered = repos.filter((repo) =>
        repo.name.toLowerCase().includes(content.toLowerCase())
      );

      setFilteredRepos(filtered);
    }
  }, [content, repos]);

  return (
    <div className="flex flex-col justify-center items-center mb-58">
      <img className="w-full h-[296px] object-cover" src={Header} alt="" />
      <div>
        <Profile profile={profile} />
        <div className="flex flex-col self-start gap-3 mt-18">
          <div className="flex items-center justify-between">
            <h2 className="text-[var(--base-subtitle)] font-bold text-lg">
              Seus Respositórios
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
        <div className="grid grid-cols-2 gap-8 mt-12">
          {!content
            ? repos.map((repo) => {
                return (
                  <a key={repo.html_url} href={repo.html_url} target="_blank">
                    <Card repo={repo} />
                  </a>
                );
              })
            : filteredRepos?.map((repo) => {
                return (
                  <a key={repo.html_url} href={repo.html_url} target="_blank">
                    <Card repo={repo} />
                  </a>
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default Blog;
