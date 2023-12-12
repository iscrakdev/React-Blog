import { useState } from "react";

const NewComment = ({ id, createComment }) => {
  const [commentText, setCommentText] = useState("");
  const [commentAuthor, setCommentAuthor] = useState("");

  return (
    <div className="new-comment">
      <input
        name="newComment-comment"
        type="text"
        placeholder="What would you like to say?"
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
      ></input>
      <input
        name="newComment-author"
        type="text"
        placeholder="Your name"
        onChange={(e) => setCommentAuthor(e.target.value)}
      ></input>
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          const data = {
            text: commentText,
            author: commentAuthor,
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
