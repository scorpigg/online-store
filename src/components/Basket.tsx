import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export function Basket() {
  return (
    <div className="wrapper">
      <Header />
      <hr />
      <p>Here should be a basket</p>
      <hr />
      <Footer />
    </div>
  );
}
