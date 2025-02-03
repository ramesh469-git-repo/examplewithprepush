import rootReducer from "./redux/reducers";
import {legacy_createStore as createStore} from "redux";

let store;

if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
} else {
  store = createStore(rootReducer);
}

export default store;
