import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { IProducts } from './carBase';
import { Basket } from './pages/Basket';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { AppContext } from './appContext';

function App() {
  const [cartItems, setCartItems] = useState<IProducts[]>([]);

  const onAddCartItem = (car: IProducts) => {
    if (cartItems.some((item) => item.id === car.id)) {
      setCartItems((prev) => prev.filter((item) => item.id !== car.id));
      localStorage.setItem('cars', JSON.stringify(cartItems.filter((item) => car.id !== item.id)));
    } else {
      setCartItems((prev) => [...prev, car]);
      localStorage.setItem('cars', JSON.stringify([...cartItems, car]));
    }
  };
  // localStorage.setItem('cars', JSON.stringify([...cartItems]));

  useEffect(() => {
    const storageItems = localStorage.getItem('cars');
    if (storageItems) {
      setCartItems(JSON.parse(storageItems));
    }
  }, []);

  const onIncreaseItemCount = (car: IProducts) => {
    if (car.count <= car.stock - 1) {
      setCartItems((prev) => prev.map((item) => (item.id === car.id ? { ...item, count: item.count + 1 } : item)));

      localStorage.setItem(
        'cars',
        JSON.stringify(cartItems.map((item) => (item.id === car.id ? { ...item, count: item.count + 1 } : item)))
      );
    }
  };

  const onDecreaseItemCount = (car: IProducts) => {
    if (car.count <= 1) {
      setCartItems((prev) => prev.filter((item) => item.id !== car.id));
      localStorage.setItem('cars', JSON.stringify(cartItems.filter((item) => item.id !== car.id)));
    } else {
      setCartItems((prev) => prev.map((item) => (item.id === car.id ? { ...item, count: item.count - 1 } : item)));
      localStorage.setItem(
        'cars',
        JSON.stringify(cartItems.map((item) => (item.id === car.id ? { ...item, count: item.count - 1 } : item)))
      );
    }
  };

  const isItemAdded = (id: number): boolean => {
    return cartItems.some((item) => item.id === id);
  };

  const itemsCount = cartItems.reduce((acc, item) => acc + item.count, 0);

  return (
    <AppContext.Provider value={{ cartItems, isItemAdded, itemsCount }}>
      <div className="wrapper">
        <Header />
        <hr />
        <Routes>
          <Route path="/" element={<Home onAddCartItem={onAddCartItem} />} />
          <Route
            path="/basket"
            element={<Basket onIncreaseItemCount={onIncreaseItemCount} onDecreaseItemCount={onDecreaseItemCount} />}
          />
          <Route path="/notfound" element={<NotFound />} />
        </Routes>
        <hr />
        <Footer />
      </div>
    </AppContext.Provider>
  );
}

export default App;
