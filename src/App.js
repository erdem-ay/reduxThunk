import "./App.css";
import { Provider, useDispatch } from "react-redux";
import AppRouter from "./router";
import store from "./redux/store/store";

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
