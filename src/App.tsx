import { Provider } from "react-redux";

import { Header } from "./components/Header";
import { Routes } from "./Routes";
import { store } from "./store";

import "./App.css";
import { history } from "./services/history";
import { CustomRouter } from "./CustomRouter";

function App() {
  return (
    <Provider store={store}>
      <CustomRouter history={history}>
        <Header />
        <Routes />
      </CustomRouter>
    </Provider>
  );
}

export default App;
