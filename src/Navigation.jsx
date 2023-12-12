import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <h1>React Blog Project</h1>
      <div className="navContainer">
        <p className="inline-obj">
          <span class="material-symbols-outlined">arrow_back</span>
        </p>
        <p className="inline-obj">My Feed</p>
        <p className="inline-obj">My Posts</p>
        <p className="inline-obj">New Post</p>
      </div>
    </div>
  );
};

export default Navigation;
