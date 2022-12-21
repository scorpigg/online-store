import React from 'react';
import { Card } from './Card';
import { Filter } from './Filter';
import { products } from '../carBase';
import { ItemsPanel } from './ItemsPanel';

export function Home() {
  return (
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
  );
}
