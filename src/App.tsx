import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./assets/Cover.svg";
import Blog from "./pages/blog";
import Post from "./pages/Post";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col justify-center items-center mb-58">
        <img className="w-full h-[296px] object-cover" src={Header} alt="" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Blog/:profilename" element={<Blog />} />
          <Route path="/post/:profile/:repo" element={<Post />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
