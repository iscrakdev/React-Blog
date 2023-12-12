import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <h1>React Bleg Project</h1>
      <div className="navContainer">
        <Link to="/" className="inline-obj">My Feed</Link>
        <Link to="/draft" className="inline-obj">New Post</Link>
        <p className="inline-obj">Search By Author</p>
      </div>
    </div>
  );
};

export default Navigation;
