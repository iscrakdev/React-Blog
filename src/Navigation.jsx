import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <h1>React Bleg Project</h1>
      <div className="navContainer">
        <Link to="/" className="inline-obj nav-obj">
          My Feed
        </Link>
        <Link to="/draft" className="inline-obj nav-obj">
          New Post
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
