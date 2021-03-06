import "./App.css";
import PostForm from "./components/PostForm";
import Posts from "./components/Posts/index";
import FetchPosts from "./components/FetchedPosts/index";

function App() {
  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col">
          <PostForm />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Синхронные посты</h2>
          <Posts posts={[1, 2, 3]} />
        </div>
        <div className="col">
          <h2>Асинхронные посты</h2>
          <FetchPosts posts={[]} />
        </div>
      </div>
    </div>
  );
}

export default App;
