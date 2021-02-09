import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestPosts } from "../../redux/actions";
import Post from "../Post";

const FetchPosts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postsReducer.fetchPosts);
  const loading = useSelector((state) => state.appReducer.fetched);
  console.log(posts, "POSTS");
  if (!posts.length) {
    return (
      <div>
        <button
          className="btn btn-primary"
          onClick={() => dispatch(requestPosts())}
        >
          Загрузить
        </button>
      </div>
    );
  }

  return (
    <div>
      {!loading ? (
        <div>
          {posts.map((post, index) => {
            return <Post post={post} key={index} />;
          })}
        </div>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default FetchPosts;
