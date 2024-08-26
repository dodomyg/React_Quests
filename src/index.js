import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import SwitchProvider from "./context/SwitchContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <SwitchProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </SwitchProvider>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
