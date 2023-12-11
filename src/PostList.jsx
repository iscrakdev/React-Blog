import PostItem from "./PostItem";

const PostList = ({ posts }) => {
  return (
    <div className="post-list">
      {posts.map((post) => (
        <PostItem post={post}></PostItem>
      ))}
    </div>
  );
};
