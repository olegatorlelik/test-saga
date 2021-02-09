import React from "react";
import { connect } from "react-redux";
import Post from "../Post";

const Posts = ({ syncPosts }) => {
  console.log(syncPosts);
  if (!syncPosts.length) {
    return (
      <div>
        <p className="text-center">Постов пока нет</p>
      </div>
    );
  }
  return (
    <div>
      {syncPosts.map((post, index) => {
        return <Post post={post} key={index} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    syncPosts: state.postsReducer.posts,
  };
};



export default connect(mapStateToProps, null)(Posts);
