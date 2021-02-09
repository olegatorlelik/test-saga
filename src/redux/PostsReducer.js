import { handleActions } from "redux-actions";
import * as actions from "./actions";
const initialState = {
  posts: [],
  fetchPosts: [],
};

const postsReducer = handleActions(
  {
    [actions.createPost]: (state, action) => ({
      ...state,
      posts: [...state.posts, action.payload],
    }),
    [actions.fetchPosts]: (state, action) => ({
      ...state,
      fetchPosts: action.payload,
    }),
  },
  initialState
);
export default postsReducer;
