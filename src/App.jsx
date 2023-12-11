import "./App.css";
import Feed from "./Feed";
import PostPage from "./PostPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [postId, setPostId] = useState(null);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Feed setPostId={setPostId}/>} />
          <Route path="/post/:id" element={<PostPage setPostId={setPostId} postId={postId}/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

{
  /* {postId === null ? (
  <Feed setPostId={setPostId}></Feed>
) : (
  <PostPage postId={postId} setPostId={setPostId}></PostPage>
)} */
}
