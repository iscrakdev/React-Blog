import { useState } from "react";

const Draft = () => {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  console.log(author);

  return (
    <div className="Draft">
      <h2>New Post</h2>
      <form>
        <input
          name="author-input"
          type="text"
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author Name"
        ></input>
        <input
          name="content-input"
          type="textarea"
          onChange={(e) => setContent(e.target.value)}
          placeholder="Post Content Here..."
        ></input>
      </form>
    </div>
  );
};

export default Draft;
