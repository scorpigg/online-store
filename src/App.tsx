import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';

import { Footer } from './components/Footer';

import { Basket } from './components/Basket';
import { Home } from './components/Home';
import { NotFound } from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="basket" element={<Basket />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <hr />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
