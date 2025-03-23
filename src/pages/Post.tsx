import { useParams, useNavigate } from "react-router-dom";
import PostProfile from "../components/PostProfile";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import "github-markdown-css";

const Post = () => {
  const { profile, repo } = useParams();
  const [readmeContent, setReadmeContent] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://api.github.com/repos/${profile}/${repo}/contents/README.md`)
      .then((response) => response.json())
      .then((data) => data)
      .then((data) =>
        decodeURIComponent(decodeURIComponent(atob(data.content)))
      )
      .then((data) => setReadmeContent(data));
  }, [profile, repo, navigate]);

  return (
    <>
      {profile && repo && <PostProfile profile={profile} repoName={repo} />}
      {readmeContent && (
        <div className="markdown-body w-[420px] sm:w-[640px] lg:w-[864px] mx-auto p-6 rounded-lg">
          <div className="p-6 rounded-lg">
            <ReactMarkdown>{readmeContent}</ReactMarkdown>
          </div>
        </div>
      )}
    </>
  );
};

export default Post;
