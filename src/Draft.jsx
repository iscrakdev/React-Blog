import { useState } from "react";
import createPost from "./utils/createPost";

const Draft = () => {
  const [img_url, setImgUrl] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className="Draft">
      <h2>New Post</h2>
      <form>
        <input
          className="author-img"
          name="author-img"
          type="text"
          onChange={(e) => setImgUrl(e.target.value)}
          placeholder="Image Url"
        />
        <br />
        <input
          className="title-input"
          name="title-input"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Post Title Here..."
        />
        <br />
        <input
          className="author-input"
          name="author-input"
          type="text"
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author Name"
        />
        <br />
        <textarea
          className="content-input"
          name="content-input"
          type="textarea"
          onChange={(e) => setContent(e.target.value)}
          placeholder="Post Content Here..."
        />
        <br />
        <button
          className="post-button"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            const post = {
              img_url,
              title,
              author,
              content,
            };
            createPost(post);
          }}
        >
          Post!
        </button>
      </form>
    </div>
  );
};

export default Draft;
