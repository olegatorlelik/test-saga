import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { compose, createStore, applyMiddleware } from "redux";
import { sagaWatcher } from "./redux/sagas";
import rootReducer from "../src/redux/RootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import createSagaMidleWare from "redux-saga";

const saga = createSagaMidleWare();
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, saga)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
saga.run(sagaWatcher);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
