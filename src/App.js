import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import "./App.css";
import AppRouter from "./router";
import axios from "axios";

const initialState = {
  loading: false,
  token: "",
  error: [],
  language: "en",
  userList: [],
  selectedUser: {},
  newsList: [],
  selectedNews: {},
};

export const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_LOADING_TRUE":
      return { ...state, loading: true };
    case "SET_LOADING_FALSE":
      return { ...state, loading: false };
    case "SET_TOKEN":
      return { ...state, payload: payload };
    case "SET_ERROR":
      return { ...state, error: payload };
    case "SET_LANGUAGE":
      return { ...state, language: payload };
    case "CLEAR_ERROR":
      return { ...state, error: [] };
    case "SET_USER_LIST":
      return { ...state, userList: payload };
    case "SET_SELECTED_USER":
      return { ...state, selectedUser: payload };
    case "SET_NEWS_LIST":
      return { ...state, newList: payload };
    case "SET_SELECTED_NEWS":
      return { ...state, selectedNews: payload };

    default:
      return state;
  }
};
// const store = createStore(rootReducer);
let store;

if (process.env.NODE_ENV === "development") {
  store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
} else {
  store = createStore(rootReducer, applyMiddleware(thunk));
}

// store.subscribe(() => console.log(store.getState()));

// store.dispatch({ type: "SET_TOKEN", payload: "ERDEM" });

export const getUserList = async (dispatch) => {
  try {
    dispatch({ type: "SET_LOADING_TRUE" });
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    dispatch({ type: "SET_USER_LIST", payload: data });
  } catch (error) {
    console.log(error);
  } finally {
    dispatch({ type: "SET_LOADING_FALSE" });
  }
};

function App() {
  return (
    <Provider store={store}>
      <div>
        <AppRouter />
      </div>
    </Provider>
  );
}

export default App;
