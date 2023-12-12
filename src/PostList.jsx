import PostItem from "./PostItem";

const PostList = ({ posts, setRefresh }) => {
  return (
    <div className="post-list">
      {posts.map((post) => (
        <PostItem key={post.id} post={post} setRefresh={setRefresh}></PostItem>
      ))}
    </div>
  );
};

export default PostList;
