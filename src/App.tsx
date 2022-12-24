import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { IProducts } from './carBase';
import { Basket } from './pages/Basket';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';

function App() {
  const [cartItems, setCartItems] = useState<IProducts[]>([]);

  const onAddCartItem = (car: IProducts) => {
    if (cartItems.some((item) => item.id === car.id)) {
      setCartItems((prev) => prev.filter((item) => item.id !== car.id));
    } else {
      setCartItems((prev) => [...prev, car]);
    }
  };

  localStorage.setItem('cars', JSON.stringify([...cartItems]));

  return (
    <div className="wrapper">
      <Header cartItems={cartItems} />
      <hr />
      <Routes>
        <Route path="/" element={<Home onAddCartItem={onAddCartItem} />}></Route>
        <Route path="/basket" element={<Basket />}></Route>
        <Route path="/notfound" element={<NotFound />}></Route>
      </Routes>
      <hr />
      <Footer />
    </div>
  );
}

export default App;
