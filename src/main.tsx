import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import { CartProvider } from "./contexts/ProductsContext.tsx";
import { ProductProvider } from "./contexts/ProductsContext.tsx";
import './global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ProductProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductProvider>
  </React.StrictMode>,
)
