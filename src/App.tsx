import React from 'react';
import { Header } from './components/Header';
import { Card } from './components/Card';
import { Filter } from './components/Filter';
import { products } from './carBase';
import { Footer } from './components/footer';
import SortList from './SortList';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <hr />
      <main>
        <Filter />
        <div className="items">
          <div className="items__panel">
            <span className="items__title">All cars</span>
            <div className="items__sort">
              <SortList />
            </div>
            <div className="items__view">
              <div className="view-list"></div>
              <div className="view-table"></div>
            </div>
            <div className="search-block">
              <img src="img/search.svg" alt="Search" />
              <input placeholder="Search..." />
            </div>
          </div>
        </div>
        <div className="cards">
          {products.map((car) => (
            <Card {...car} key={car.id} />
          ))}
        </div>
      </main>
      <hr />
      <Footer />
    </div>
  );
}

export default App;
