import PostItem from "./PostItem";

const PostList = ({ posts, setPostId }) => {
  return (
    <div className="post-list">
        {posts.map((post) => (
          <PostItem key={post.id} post={post} setPostId={setPostId}></PostItem>
        ))}
    </div>
  );
};

export default PostList;
