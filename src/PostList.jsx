import PostItem from "./PostItem";

const PostList = ({ posts }) => {
  return (
    <div className="post-list">
      {posts.map((post) => (
        <PostItem key={post.id} post={post}></PostItem>
      ))}
    </div>
  );
};

export default PostList;
