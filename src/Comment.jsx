const Comment = ({ comment, setRefresh }) => {
  
  const getCurrentVotes = () => (comment.votes ? comment.votes : 0);
  
  const changeVotes = (data) => {
    fetch(`https://sf-collective-api.herokuapp.com/comments/${comment.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(() => {
      setRefresh(true);
    });
  };

  return (
    <div className="comment">
      <div className="row-1">
        <p className="comment-author">
          {comment.author}{" "}
          <span
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
          >
            delete
          </span>
        </p>
      </div>
      <p className="comment-content">{comment.text}</p>
      <div className="inline-obj">
        <p className="like-dislike-bar">
          <span
            className="material-symbols-outlined like"
            onClick={() => {
              changeVotes({ votes: getCurrentVotes() + 1 });
            }}
          >
            thumb_up
          </span>
          {getCurrentVotes()}
          <span
            className="material-symbols-outlined dislike"
            onClick={() => {
              changeVotes({ votes: getCurrentVotes() - 1 });
            }}
          >
            thumb_down
          </span>
        </p>
      </div>
    </div>
  );
};

export default Comment;
