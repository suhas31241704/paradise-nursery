import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// Components (abhi banayenge)
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;