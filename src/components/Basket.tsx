import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export function Basket() {
  const cartItems: {}[] = [];
  return (
    <div className="wrapper">
      <Header cartItems={cartItems} />
      <hr />
      <p>Here should be a basket</p>
      <hr />
      <Footer />
    </div>
  );
}
