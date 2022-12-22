import React from 'react';

export function Header() {
  return (
    <header>
      <div className="header__left">
        <img src="img/logo.svg" alt="logo" width="121" height="37"></img>
        <div className="header__info">
          <h3>Carfun</h3>
          <span className="header__tagline">Buy your dream car</span>
        </div>
      </div>
      <div className="header__right">
        <svg
          className="header__cart"
          width="34"
          height="33"
          viewBox="0 0 34 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.6364 31.5455C13.4397 31.5455 14.0909 30.8942 14.0909 30.0909C14.0909 29.2876 13.4397
            28.6364 12.6364 28.6364C11.833 28.6364 11.1818 29.2876 11.1818 30.0909C11.1818 30.8942 11.833 31.5455
            12.6364 31.5455Z"
            stroke="#9B9B9B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M28.6364 31.5455C29.4397 31.5455 30.0909 30.8942 30.0909 30.0909C30.0909 29.2876 29.4397
            28.6364 28.6364 28.6364C27.833 28.6364 27.1818 29.2876 27.1818 30.0909C27.1818 30.8942 27.833
            31.5455 28.6364 31.5455Z"
            stroke="#9B9B9B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1 1H6.81818L10.7164 20.4764C10.8494 21.146 11.2137 21.7476 11.7455 22.1757C12.2774 22.6038
            12.9428 22.8313 13.6255 22.8182H27.7636C28.4463 22.8313 29.1117 22.6038 29.6436 22.1757C30.1754 21.7476
            30.5397 21.146 30.6727 20.4764L33 8.27273H8.27273"
            stroke="#9B9B9B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="header__items-count">0</span>
        <span className="header__price">€1205</span>
      </div>
    </header>
  );
}
