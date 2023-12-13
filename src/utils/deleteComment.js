const deleteComment = (comment) => {
  return fetch(
    `https://sf-collective-api.herokuapp.com/comments/${comment.id}`,
    {
      method: "DELETE",
    }
  );
};

export default deleteComment;
