import { legacy_createStore as createStore, combineReducers } from "redux";
import denoReducer from "./reducer/denoReducer";

const store = createStore(
    combineReducers({
        deno: denoReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;