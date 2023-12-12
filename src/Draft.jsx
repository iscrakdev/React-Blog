import { useState } from "react";

const Draft = () => {
  const [img_url, setImgUrl] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

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
          className="author-img"
          name="author-img"
          type="text"
          onChange={(e) => setImgUrl(e.target.value)}
          placeholder="Image Url"
        ></input>
        <br />
        <input
          className="title-input"
          name="title-input"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Post Title Here..."
        ></input>
        <br />
        <input
          className="author-input"
          name="author-input"
          type="text"
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author Name"
        ></input>
        <br />
        <textarea
          className="content-input"
          name="content-input"
          type="textarea"
          onChange={(e) => setContent(e.target.value)}
          placeholder="Post Content Here..."
        ></textarea>
        <br />
        <button
          className="post-button"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            const post = {};
            if (content === "") {
              window.alert("please provide some content for your post");
              return null;
            }
            if (title === "") {
              window.alert("please provide a title for your post");
              return null;
            }
            if (img_url !== "") {
              post.img_url = img_url;
            }
            if (author === "") {
              post.author = "anonymous";
            } else {
              post.author = author;
            }
            post.content = content;
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
