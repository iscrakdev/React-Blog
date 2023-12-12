const Comment = ({ comment, setRefresh }) => {
  return (
    <div className="comment">
      <div className="row-1">
        <p className="comment-author">{comment.author} <span
            className="material-symbols-outlined comment-delete-button"
            onClick={() => {
              if (
                window.confirm(
                  "Are you sure you want to delete " + comment.text
                )
              ) {
                fetch(
                  `https://sf-collective-api.herokuapp.com/comments/${comment.id}`,
                  {
                    method: "DELETE",
                  }
                ).then(() => {
                  setRefresh(true);
                });
              }
            }}
          >delete</span></p>
      </div>
      <p className="comment-content">{comment.text}</p>
      <div className="inline-obj">
        <p className="like-dislike-bar">
          <span className="material-symbols-outlined like">thumb_up</span>###
          <span className="material-symbols-outlined dislike">thumb_down</span>
        </p>
      </div>
    </div>
  );
};

export default Comment;
