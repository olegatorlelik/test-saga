import { combineReducers } from "redux";
import appReducer from "./AppReducer";
import postsReducer from "./PostsReducer";

const rootReducer = combineReducers({
  postsReducer,
  appReducer,
});

export default rootReducer;
