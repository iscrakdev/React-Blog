import "./App.css";
import PostList from "./PostList";


function App() {
  const posts = [1, 2, 3, 4]

  return (
    <div className="App">
      <PostList posts={posts}></PostList>
    </div>
  );
}

export default App;
