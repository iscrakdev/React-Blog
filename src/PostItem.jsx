import { Link } from "react-router-dom";
import LikeDislikeButton from "./LikeDislikeButton";

const PostItem = ({ post, setRefresh }) => {
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
          <p className={`inline-obj`}>
            <LikeDislikeButton type={'posts'} payload={post} setRefresh={setRefresh} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
