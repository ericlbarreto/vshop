import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import { CartProvider } from "./contexts/ProductsContext.tsx";
import { ProductProvider } from "./contexts/ProductsContext.tsx";
import { ThemeProvider } from './contexts/ThemeContext.tsx';
import './global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ProductProvider>
      <CartProvider>
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
          <App />
        </ThemeProvider>
      </CartProvider>
    </ProductProvider>
  </React.StrictMode>,
)
