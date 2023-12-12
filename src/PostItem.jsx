import { Link } from "react-router-dom";

const PostItem = ({ post }) => {
  return (
    <div className="post-item">
      <div className="row-1">
        <h2 className="inline-obj">{post.title.slice(0, 80)}...</h2>
        <p
          onClick={() => console.log("POST request to delete post.id")}
          className="inline-obj"
        >
          <span className="material-symbols-outlined delete-button">delete</span>
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
          <p className="inline-obj add-pad">
            <span className="material-symbols-outlined like">thumb_up</span>#
          </p>
          <p className="inline-obj">
            <span className="material-symbols-outlined dislike">thumb_down</span>#
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
