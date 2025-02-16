import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap styling
import "react-toastify/dist/ReactToastify.css"; // Toast notifications styling

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
