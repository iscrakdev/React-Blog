import { useState, useEffect } from "react";
import { useParams } from "react-router";

const PostPage = ({ postId, setPostId }) => {
  const {id} = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState({});

  useEffect(() => {
    fetch(`https://sf-collective-api.herokuapp.com/posts/${postId}`)
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, []);
  useEffect(() => {
    fetch(`https://sf-collective-api.herokuapp.com/comments?post_id=${postId}`)
    .then((response) => response.json())
    .then((data) => setComments(data));
  }, []);

  return (
    <div className="post-page">
      <div className = "post">
      <h2 className = "row-1">{post.title}</h2>
      <p className = "row-2">{post.author}</p>
      <p className = "row-3">{post.content}</p>
      <p className = "row-4"></p>
      </div>
      <hr></hr>
      <div className = "comments-section">
        
      </div>
    </div>
  )
};

export default PostPage;
