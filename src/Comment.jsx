const Comment = ({ comment, setRefresh }) => {
  return (
    <div className="comment">
      <p>
        <span
          className="material-symbols-outlined delete-button"
          onClick={() => {
            fetch(
              `https://sf-collective-api.herokuapp.com/comments/${comment.id}`,
              {
                method: "DELETE",
              }
            ).then(() => {setRefresh(true)});

          }}
        >
          delete
        </span>
      </p>
      <p className="comment-author">{comment.author}</p>
      <p className="comment-content">{comment.text}</p>
    </div>
  );
};

export default Comment;
