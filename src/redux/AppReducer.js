import { handleActions } from "redux-actions";
import * as actions from "./actions";
const initialState = {
  fetched: false,
  alert: null,
};

const appReducer = handleActions(
  {
    [actions.showLoader]: (state, action) => ({
      ...state,
      fetched: true,
    }),
    [actions.hideLoader]: (state, action) => ({
      ...state,
      fetched: false,
    }),
    [actions.showAlert]: (state, action) => ({
      ...state,
      alert: action.payload,
    }),
    [actions.hideAlert]: (state, action) => ({ ...state, alert: null }),
  },
  initialState
);
export default appReducer;
