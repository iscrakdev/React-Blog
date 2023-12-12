import PostList from "./PostList";
import { useState, useEffect } from "react";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [refresh, setRefresh] = useState(true);

  // Fetches Posts on Initial Render
  useEffect(() => {
    fetch(
      "https://sf-collective-api.herokuapp.com/posts?_limit=10&_order=desc&_sort=id"
    )
      .then((response) => response.json())
      .then((data) => setPosts(data));
    setRefresh(false);
  }, [refresh]);

  return (
    <div className="Feed">
      <PostList posts={posts} setRefresh={setRefresh}></PostList>
    </div>
  );
}

export default Feed;
