import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./pages/blog";
import Post from "./pages/Post";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/post/:profile/:repo" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
