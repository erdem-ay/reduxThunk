import "./App.css";
import { Provider } from "react-redux";
import AppRouter from "./router";
import store from "./redux/store/store";

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
