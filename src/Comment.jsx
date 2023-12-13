import LikeDislikeButton from "./LikeDislikeButton";
import deleteComment from "./utils/deleteComment";

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
                deleteComment(comment).then(setRefresh(true));
              }
            }}
          >
            delete
          </span>
        </p>
      </div>
      <p className="comment-content">{comment.text}</p>
      <div className="inline-obj">
        <div className={`like-dislike-bar`}>
          <LikeDislikeButton
            type={"comments"}
            payload={comment}
            setRefresh={setRefresh}
          />
        </div>
      </div>
    </div>
  );
};

export default Comment;
