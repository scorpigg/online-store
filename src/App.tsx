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

  const onIncreaseItemCount = (car: IProducts) => {
    const newItemsArr = cartItems;
    setCartItems(newItemsArr.map((item) => (item.id === car.id ? { ...item, count: item.count + 1 } : item)));
  };

  const onDecreaseItemCount = (car: IProducts) => {
    if (car.count <= 1) {
      setCartItems((prev) => prev.filter((item) => item.id !== car.id));
    } else {
      const newItemsArr = cartItems;
      setCartItems(newItemsArr.map((item) => (item.id === car.id ? { ...item, count: item.count - 1 } : item)));
    }
  };

  localStorage.setItem('cars', JSON.stringify([...cartItems]));

  return (
    <div className="wrapper">
      <Header cartItems={cartItems} />
      <hr />
      <Routes>
        <Route path="/" element={<Home onAddCartItem={onAddCartItem} />} />
        <Route
          path="/basket"
          element={
            <Basket
              cartItems={cartItems}
              onIncreaseItemCount={onIncreaseItemCount}
              onDecreaseItemCount={onDecreaseItemCount}
            />
          }
        />
        <Route path="/notfound" element={<NotFound />} />
      </Routes>
      <hr />
      <Footer />
    </div>
  );
}

export default App;
