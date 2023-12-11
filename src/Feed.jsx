import PostList from "./PostList";
import { useState, useEffect } from "react";

function Feed({ setPostId }) {
  const [posts, setPosts] = useState([]);

  // Fetches Posts on Initial Render
  useEffect(() => {
    fetch("https://sf-collective-api.herokuapp.com/posts?_limit=10")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="Feed">
      <PostList posts={posts} setPostId={setPostId}></PostList>
    </div>
  );
}

export default Feed;
