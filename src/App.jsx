import "./App.css";
import Feed from "./Feed";
import PostPage from "./PostPage";
import { useState } from "react";

function App() {
  const [postId, setPostId] = useState(null);

  return (
    <div className="App">
      {postId === null ? (
        <Feed setPostId={setPostId}></Feed>
      ) : (
        <PostPage postId={postId} setPostId={setPostId}></PostPage>
      )}
    </div>
  );
}

export default App;
