import Header from "../assets/Cover.svg";
import Profile from "../components/Profile";

const Blog = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img className="w-full h-[296px] object-cover" src={Header} alt="" />
      <Profile profileName="Yan-CarlosIF" />
    </div>
  );
};

export default Blog;
