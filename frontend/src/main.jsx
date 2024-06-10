import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/desktop.css";
import "./styles/tablet.css";
import "./styles/lowTablets.css";
import "./styles/mobile.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
      <App />
  </BrowserRouter>
);
