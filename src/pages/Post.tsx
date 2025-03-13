import { useParams } from "react-router-dom";
import Header from "../assets/Cover.svg";
import PostProfile from "../components/PostProfile";

const Post = () => {
  const { profile, repo } = useParams();

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
    </div>
  );
};

export default Post;
