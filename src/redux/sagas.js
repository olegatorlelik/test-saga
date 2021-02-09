import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { hideLoader, showLoader, requestPosts, fetchPosts } from "./actions";

export function* sagaWatcher() {
  const { type } = requestPosts();
  yield takeEvery(type, sagaWorker);
}
export function* sagaWorker() {
  yield put(showLoader());
  const response = yield call(getfetchPosts);
  yield put(fetchPosts(response));
  yield put(hideLoader());
}

const getfetchPosts = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );
  return response.data;
};
