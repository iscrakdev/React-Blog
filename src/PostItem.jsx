const PostItem = ({ post }) => {
  console.log(post);
  return (
    <div className="post-item">
      <div className="row-1">
        <h2>{post.title}</h2>
        <p onClick={() => console.log("delete")}>
          <span class="material-symbols-outlined">delete</span>
        </p>
      </div>
      <div className="row-2">
        <p>{post.author}</p>
      </div>
      <div className="row-3">
        <p>{post.content.slice(0, 250)}</p>
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
