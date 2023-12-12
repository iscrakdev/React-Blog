import { Link } from "react-router-dom";
import { useState } from "react";

const PostItem = ({ post, setRefresh }) => {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const deleteComments = (comments) => {
    for (let comment of comments) {
      fetch(`https://sf-collective-api.herokuapp.com/comments/${comment.id}`, {
        method: "DELETE",
      });
    }
  };

  const deletePost = () => {
    if (window.confirm("Are you sure you want to delete " + post.title)) {
      fetch(
        `https://sf-collective-api.herokuapp.com/comments/?post_id=${post.id}`
      )
        .then((response) => response.json())
        .then(deleteComments);
      fetch(`https://sf-collective-api.herokuapp.com/posts/${post.id}`, {
        method: "DELETE",
      }).then(() => {
        setRefresh(true);
      });
    }
  };

  const getCurrentVotes = () => (post.votes ? post.votes : 0);

  const changeVotes = (data) => {
    fetch(`https://sf-collective-api.herokuapp.com/posts/${post.id}`, {
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
    <div className="post-item">
      <div className="row-1">
        <h2 className="inline-obj post-title">{post.title.slice(0, 80)}...</h2>
        <p onClick={() => deletePost()} className="inline-obj">
          <span className="material-symbols-outlined delete-button">
            delete
          </span>
        </p>
      </div>
      <div className="row-2">
        <p>{post.author}</p>
      </div>
      <div className="row-3">
        <p>{post.content.slice(0, 250)}</p>
      </div>
      <div className="row-4">
        <Link to={`/post/${post.id}`} className="inline-obj readmore">
          Read More...
        </Link>
        <div className="inline-obj endline">
          <p
            className={`inline-obj like-dislike-buttons ${
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
    </div>
  );
};

export default PostItem;
