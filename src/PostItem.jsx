const PostItem = ({ post }) => {
  return (
    <div className="post-item">
      <div className="row-1">
        <h2>Post Title</h2>
        <p onClick={() => console.log("delete")}>🗑</p>
      </div>
      <div className="row-2">
        <p>Author Name</p>
      </div>
      <div className="row-3">
        <p>limited post text</p>
      </div>
      <div className="row-4">
        <p onClick={() => console.log("read more")}>Read More...</p>
        <p>Upvotes: upvotes</p>
        <p>Downvotes: downvotes</p>
      </div>
    </div>
  );
};

export default PostItem;
