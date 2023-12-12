import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Comment from "./Comment";
import Navigation from "./Navigation";

const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`https://sf-collective-api.herokuapp.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data));
    fetch(`https://sf-collective-api.herokuapp.com/comments?post_id=${id}`)
      .then((response) => response.json())
      .then((data) => setComments(data));
  }, [id]);
  if (post.img_url === ""){
    post.img_url = "https://cdn4.iconfinder.com/data/icons/political-elections/50/48-512.png"
  }
  return (
    <div className="post-page">
      <Navigation navigation={Navigation}></Navigation>
      <div className="post">
        <h2 className="row-1">{post.title}</h2>
        <div className="row-2">
          <p className="postAuthor">
            <span>
              <img src={post.img_url} className="post-img"></img>
            </span>
            {post.author}
          </p>
        </div>
        <p className="row-3">{post.content}</p>
        <p className="row-4"></p>
      </div>
      <hr></hr>
      <div className="comments-section">
        {comments.map((comment) => {
          return <Comment key={comment.id} comment={comment}></Comment>;
        })}
      </div>
      <div className = "new-comment">
        <input name = "newComment-comment"type = "text" placeholder = "What would you like to say?"></input>
        <input name = "newComment-author" type = "text" placeholder = "Your name"></input>
        <button type = "button">Submit Comment</button>
      </div>
    </div>
  );
};

export default PostPage;
