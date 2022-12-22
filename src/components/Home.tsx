import React from 'react';
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

  return (
    <div className="wrapper">
      <Header />
      <hr />
      <main>
        <Filter />
        <div className="main-container">
          <ItemsPanel />
          <div className="cards">
            {productsShow.map((car) => (
              <Card {...car} key={car.id} />
            ))}
          </div>
        </div>
      </main>
      <hr />
      <Footer />
    </div>
  );
}
