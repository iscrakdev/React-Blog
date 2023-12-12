import "./App.css";
import Feed from "./Feed";
import PostPage from "./PostPage";
import Draft from "./Draft";
import Navigation from "./Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Navigation navigation={Navigation}></Navigation>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/draft" element={<Draft />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
