import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Comment from "./Comment";
import NewComment from "./NewComment";
import LikeDislikeButton from "./LikeDislikeButton";
import deletePost from "./utils/deletePost";

const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    fetch(`https://sf-collective-api.herokuapp.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (!data.img_url) {
          data.img_url =
            "https://cdn4.iconfinder.com/data/icons/political-elections/50/48-512.png";
        }
        setPost(data);
      });

    fetch(`https://sf-collective-api.herokuapp.com/comments?post_id=${id}`)
      .then((response) => response.json())
      .then((data) => setComments(data));

    setRefresh(false);
  }, [id, refresh]);

  const createComment = (data) => {
    fetch("https://sf-collective-api.herokuapp.com/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(() => setRefresh(true));
  };

  return (
    <div className="post-page">
      <div className="post">
        <h2 className="row-1 post-title">
          {post.title}{" "}
          <span
            className="material-symbols-outlined comment-delete-button"
            onClick={() => {
              if (
                window.confirm("Are you sure you want to delete " + post.title)
              ) {
                deletePost(post).then(() => window.location.replace("/"));
              }
            }}
          >
            delete
          </span>
        </h2>
        <div className="row-2">
          <p className="post-author">
            <span>
              <img src={post.img_url} className="post-img"></img>
            </span>
            {post.author}
          </p>
        </div>
        <p className="row-3 post-content">{post.content}</p>
        <div className={`row-4 post-page-likeDislike`}>
          <LikeDislikeButton
            type={"posts"}
            payload={post}
            setRefresh={setRefresh}
          />
        </div>
      </div>
      <hr></hr>
      <div className="comments-section">
        {comments.map((comment) => {
          return (
            <Comment
              key={comment.id}
              comment={comment}
              setRefresh={setRefresh}
            />
          );
        })}
      </div>
      <NewComment id={id} createComment={createComment} />
    </div>
  );
};

export default PostPage;
