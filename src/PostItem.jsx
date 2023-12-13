import { Link } from "react-router-dom";
import LikeDislikeButton from "./LikeDislikeButton";
import deletePost from "./utils/deletePost";

const PostItem = ({ post, setRefresh }) => {
  return (
    <div className="post-item">
      <div className="row-1">
        <h2 className="inline-obj post-title">{post.title.slice(0, 80)}...</h2>
        <p
          onClick={() => {
            if (
              window.confirm("Are you sure you want to delete " + post.title)
            ) {
              deletePost(post).then(setRefresh(true));
            }
          }}
          className="inline-obj"
        >
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
          <div className={`inline-obj`}>
            <LikeDislikeButton
              type={"posts"}
              payload={post}
              setRefresh={setRefresh}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
