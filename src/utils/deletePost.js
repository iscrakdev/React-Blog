const deleteComments = (comments) => {
  for (let comment of comments) {
    fetch(`https://sf-collective-api.herokuapp.com/comments/${comment.id}`, {
      method: "DELETE",
    });
  }
};

const deletePost = (post) => {
  if (window.confirm("Are you sure you want to delete " + post.title)) {
    fetch(
      `https://sf-collective-api.herokuapp.com/comments/?post_id=${post.id}`
    )
      .then((response) => response.json())
      .then(deleteComments);
    return fetch(`https://sf-collective-api.herokuapp.com/posts/${post.id}`, {
      method: "DELETE",
    });
  }
};

export default deletePost;
