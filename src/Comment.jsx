import LikeDislikeButton from "./LikeDislikeButton";

const Comment = ({ comment, setRefresh }) => {
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
        <p className={`like-dislike-bar`}>
          <LikeDislikeButton type={'comments'} payload={comment} setRefresh={setRefresh}/>
        </p>
      </div>
    </div>
  );
};

export default Comment;
