import { useState } from "react";

const LikeDislikeButton = ({ payload, setRefresh, type }) => {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const getCurrentVotes = () => (payload.votes ? payload.votes : 0);

  const changeVotes = (data) => {
    fetch(`https://sf-collective-api.herokuapp.com/${type}/${payload.id}`, {
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
    <p
      className={`like-dislike-buttons ${liked ? "is-liked" : ""} ${
        disliked ? "is-disliked" : ""
      }`}
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
      <span className = "like-counter">
      {getCurrentVotes()}
      </span>
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
  );
};

export default LikeDislikeButton