import { useState } from "react";

const Comment = ({ comment, setRefresh }) => {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

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
        <p
          className={`like-dislike-bar like-dislike-buttons ${
            liked ? "is-liked" : ""
          } ${disliked ? "is-disliked" : ""}`}
        >
          <span
            className="material-symbols-outlined like"
            onClick={() => {
              if (liked) {
                changeVotes({ votes: getCurrentVotes() - 1 });
                setLiked(false);
              } else if (disliked) {
                changeVotes({ votes: getCurrentVotes() + 2 });
                setLiked(true);
                setDisliked(false);
              } else {
                changeVotes({ votes: getCurrentVotes() + 1 });
                setLiked(true);
              }
            }}
          >
            thumb_up
          </span>
          {getCurrentVotes()}
          <span
            className="material-symbols-outlined dislike"
            onClick={() => {
              if (disliked) {
                changeVotes({ votes: getCurrentVotes() + 1 });
                setDisliked(false);
              } else if (liked) {
                changeVotes({ votes: getCurrentVotes() - 2 });
                setLiked(false);
                setDisliked(true);
              } else {
                changeVotes({ votes: getCurrentVotes() - 1 });
                setDisliked(true);
              }
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
