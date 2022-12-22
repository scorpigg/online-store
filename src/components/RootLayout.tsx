import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

export default function RootLayout() {
  return (
    <div className="wrapper">
      <Header />
      <hr />
      <Outlet />
      <hr />
      <Footer />
    </div>
  );
}
