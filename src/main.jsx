import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-rmczxd2lxjrmwuit.us.auth0.com"
    clientId="9NWYqDorjbm2x4KjoeyhKk3GAVsRMsJM"
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: "https://dev-rmczxd2lxjrmwuit.us.auth0.com/api/v2/",
    }}
  >
    <Provider store={store}>
      <App />
    </Provider>
  </Auth0Provider>
);
