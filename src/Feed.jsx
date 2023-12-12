import PostList from "./PostList";
import { useState, useEffect } from "react";
import Navigation from "./Navigation";

function Feed() {
  const [posts, setPosts] = useState([]);

  // Fetches Posts on Initial Render
  useEffect(() => {
    fetch("https://sf-collective-api.herokuapp.com/posts?_limit=10")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="Feed">
      <Navigation navigation={Navigation}></Navigation>
      <PostList posts={posts}></PostList>
    </div>
  );
}

export default Feed;
