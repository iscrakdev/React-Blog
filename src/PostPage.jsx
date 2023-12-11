import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Comment from "./Comment";

const PostPage = ({ postId, setPostId }) => {
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
  }, []);

  return (
    <div className="post-page">
      <div className="post">
        <h2 className="row-1">{post.title}</h2>
        <div className = "row-2">
        <p className = "postAuthor"><span><img src={post.img_url} className = "post-img"></img></span>{post.author}</p>
        </div>
        <p className="row-3">{post.content}</p>
        <p className="row-4"></p>
      </div>
      <hr></hr>
      <div className="comments-section">
        {comments.map((comment) => {
          console.log(comment)
          return (
            <Comment key={comment.id} comment={comment}></Comment>
          )
        })}
      </div>
    </div>
  );
};

export default PostPage;
