import { useParams } from "react-router";

const PostPage = ({ postId, setPostId }) => {
  const { id } = useParams();
  return <div className="post-page">Hello World this is post {id}</div>;
};

export default PostPage;
