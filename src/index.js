import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./redux/store";
import CartProvider from "./providers/cart/cart.provider";

import "./index.css";
import App from "./App";

ReactDOM.render(
  //We have wrapper all the components inside the CartProvider,this allow all components to have access to props and its functions.
  <CartProvider>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </CartProvider>,
  document.getElementById("root")
);
