import { useState } from "react";

const NewComment = ({ id, createComment }) => {
  const [commentText, setCommentText] = useState("");
  const [commentAuthor, setCommentAuthor] = useState("");

  return (
    <div className="new-comment">
      <input
      className="newComment-author"
        name="newComment-author"
        type="text"
        placeholder="Your name"
        onChange={(e) => setCommentAuthor(e.target.value)}
      ></input><br/>
      <textarea
        className="newComment-comment"
        name="newComment-comment"
        type="text"
        placeholder="What would you like to say?"
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
      ></textarea>
      <br/><br/>
      <button
        className = "newComment-submission"
        type="submit"
        onClick={(e) => {
          if (commentText === "") {
            return null
          }
          e.preventDefault();
          let author;
          if (commentAuthor === "") {
            author = "anonymous";
          } else {
            author = commentAuthor;
          }
          const data = {
            text: commentText,
            author,
            post_id: id,
          };
          createComment(data);
          setCommentText("");
        }}
      >
        Submit Comment
      </button>
    </div>
  );
};

export default NewComment;
