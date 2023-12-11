const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <p className="comment-author">{comment.author}</p>
      <p className="comment-content">{comment.text}</p>
    </div>
  );
};

export default Comment;
