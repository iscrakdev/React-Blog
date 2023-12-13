const verifyPost = (post) => {
  if (post.content === "") {
    window.alert("please provide some content for your post");
    return false;
  }
  if (post.title === "") {
    window.alert("please provide a title for your post");
    return false;
  }
  if (post.author === "") {
    post.author = "anonymous";
  }
  return post;
};

const createPost = (post) => {
  post = verifyPost(post);
  if (post) {
    fetch("https://sf-collective-api.herokuapp.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((response) => response.json())
      .then((data) => window.location.replace(`/post/${data.id}`));
  }
};

export default createPost;
