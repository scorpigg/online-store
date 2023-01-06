import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { IProducts, products } from './carBase';
import { Cart } from './pages/Cart';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { AppContext } from './appContext';
import { CarDescription } from './pages/CarDescription';
import { useLocation } from 'react-router-dom';

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

  const search = useLocation().search;
  const viewQuery = new URLSearchParams(search).get('view');
  let initView = 'table';
  if (viewQuery) {
    initView = viewQuery;
  }
  const [itemsView, setItemsView] = useState(initView);

  const onItemView = (view: string) => {
    setItemsView(view);
  };

  const [visibleCars, setVisCars] = useState(products);

  const setVisibleCars = (showCars: IProducts[]) => {
    setVisCars(showCars);
  };

  const [isCartSubmit, setIsCartSubmit] = useState(false);

  const navigate = useNavigate();
  const onCartSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsCartSubmit(true);
    localStorage.clear();
    setCartItems([]);

    setTimeout(() => {
      navigate('/');
      setIsCartSubmit(false);
    }, 3000);
  };

  return (
    <AppContext.Provider
      value={{
        cartItems,
        isItemAdded,
        itemsCount,
        itemsView,
        onItemView,
        isCartSubmit,
        onCartSubmit,
        onAddCartItem,
        buyModalClose,
        modalClose,
        visibleCars,
        setVisibleCars,
      }}
    >
      <div className="wrapper">
        <Header />
        <hr />
        <Routes>
          <Route path="/" element={<Home onAddCartItem={onAddCartItem} />} />
          <Route
            path="/cart"
            element={<Cart onIncreaseItemCount={onIncreaseItemCount} onDecreaseItemCount={onDecreaseItemCount} />}
          />
          <Route path="/car-description/:id" element={<CarDescription />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <hr />
        <Footer />
      </div>
    </AppContext.Provider>
  );
}

export default App;
