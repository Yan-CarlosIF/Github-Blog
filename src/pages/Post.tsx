import { useParams } from "react-router-dom";
import Header from "../assets/Cover.svg";
import PostProfile from "../components/PostProfile";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import "github-markdown-css";

const Post = () => {
  const { profile, repo } = useParams();
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    fetch(`https://api.github.com/repos/${profile}/${repo}/contents/README.md`)
      .then((response) => response.json())
      .then((data) => decodeURIComponent(escape(atob(data.content))))
      .then((data) => setContent(data));
  }, [profile, repo]);

  if (!profile || !repo) {
    return (
      <div className="flex flex-col justify-center items-center mb-58">
        <img className="w-full h-[296px] object-cover" src={Header} alt="" />
        <h1>Repositório não encontrado</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center mb-58">
      <img className="w-full h-[296px] object-cover" src={Header} alt="" />
      <PostProfile profile={profile} repoName={repo} />
      <div
        className="markdown-body w-[864px] mx-auto p-6 text-[var(--base-text)] rounded-lg"
        style={{ background: "var(--base-backgroud)" }}
      >
        <div className="p-6 rounded-lg">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default Post;
