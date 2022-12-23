import React, { useState } from 'react';
import { Card } from './Card';
import { Filter } from './Filter';
import { IProducts, products } from '../carBase';
import { ItemsPanel } from './ItemsPanel';
import { useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

export function Home() {
  const search = useLocation().search;
  const productsShow: Array<IProducts> = [];
  if (search !== null) {
    const catQuery = new URLSearchParams(search).get('cat');
    let cat: Array<string> = [];
    if (catQuery) {
      cat = JSON.parse(catQuery);
    }
    if (cat.length > 0) {
      products.forEach((car) => {
        cat.forEach((elemSearch) => {
          if (elemSearch === car.category) {
            productsShow.push(car);
          }
        });
      });
    } else {
      products.map((car) => productsShow.push(car));
    }
  }

  const [cartItems, setCartItems] = useState<IProducts[]>([]);
  const [searchValue, setSearchValue] = useState('');

  const onAddCartItem = (car: IProducts) => {
    if (cartItems.some((item) => item.id === car.id)) {
      setCartItems((prev) => prev.filter((item) => item.id !== car.id));
    } else {
      setCartItems((prev) => [...prev, car]);
    }
  };

  localStorage.setItem('cars', JSON.stringify([...cartItems]));

  const onChangeSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const clearInput = () => {
    setSearchValue('');
  };

  return (
    <div className="wrapper">
      <Header cartItems={cartItems} />
      <hr />
      <main>
        <Filter />
        <div className="main-container">
          <ItemsPanel onChange={onChangeSearchInput} searchValue={searchValue} clearInput={clearInput} />
          <div className="cards">
            {productsShow
              .filter((car) => car.title.toLowerCase().includes(searchValue.toLocaleLowerCase()))
              .map((car) => (
                <Card {...car} key={car.id} onPlus={(carObj) => onAddCartItem(carObj)} />
              ))}
          </div>
        </div>
      </main>
      <hr />
      <Footer />
    </div>
  );
}
