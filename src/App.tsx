import React from 'react';
import { Header } from './components/Header';
import { Card } from './components/Card';
import { Filter } from './components/Filter';
import { products } from './carBase';
import { Footer } from './components/Footer';
import { ItemsPanel } from './components/ItemsPanel';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <hr />
      <main>
        <Filter />
        <div className="main-container">
          <ItemsPanel />
          <div className="cards">
            {products.map((car) => (
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

export default App;
