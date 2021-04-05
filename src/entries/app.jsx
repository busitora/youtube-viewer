import "core-js/stable";
import "regenerator-runtime/runtime";
import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "~/style/GlobalStyle";

import App from "~/routings/App";
import { FavoriteProvider } from "~/contexts/FavoriteContext";

const rootEl = document.getElementById("root");

ReactDOM.render(
  <>
    <GlobalStyle />
    <FavoriteProvider>
      <App />
    </FavoriteProvider>
  </>,
  rootEl
);
