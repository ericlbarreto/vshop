import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./global.css";
import { CartProvider, ProductProvider } from "./contexts/ProductsContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <CartProvider>
    <ProductProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ProductProvider>
  </CartProvider>
);
