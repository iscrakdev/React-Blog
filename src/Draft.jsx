import { useState } from "react";

const Draft = () => {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  const createPost = (data) => {
    fetch("https://sf-collective-api.herokuapp.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => window.location.replace(`/post/${data.id}`));
  };

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
        <input
          name="title-input"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Post Title Here..."
        ></input>
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            const data = {
              author,
              content,
              title,
            };
            createPost(data);
          }}
        >
          Post!
        </button>
      </form>
    </div>
  );
};

export default Draft;
