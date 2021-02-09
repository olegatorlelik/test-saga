import { createAction } from "redux-actions";

export const createPost = createAction("CREATE_POST");
export const showLoader = createAction("SHOW_LOADER");
export const hideLoader = createAction("HIDE_LOADER");
export const fetchPosts = createAction("FETCH_POST");
export const showAlert = createAction("SHOW_ALERT");
export const hideAlert = createAction("HIDE_ALERT");
export const requestPosts = createAction("REQUEST_POSTS");
