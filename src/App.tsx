import React from 'react';
import SortList from './SortList';

function App() {
  return (
    <div className="wrapper">
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
          <span className="header__price">€1205</span>
        </div>
      </header>
      <hr />

      <main>
        <form className="filter">
          <h4 className="filter__title">Filter</h4>
          <div className="filter__container">
            <ul className="filter__categories">
              <h5>Category</h5>
              <li>
                <input type="checkbox" id="real-car" />
                <label htmlFor="real-car">Real car</label>
              </li>
              <li>
                <input type="checkbox" id="kids-car" />
                <label htmlFor="kids-car">Kids car</label>
              </li>
              <li>
                <input type="checkbox" id="scale-car" />
                <label htmlFor="scale-car">Scale car</label>
              </li>
            </ul>
            <ul className="filter__brand">
              <h5>Brand</h5>
              <li>
                <input type="checkbox" id="lamborghini" />
                <label htmlFor="lamborghini">Lamborghini</label>
              </li>
              <li>
                <input type="checkbox" id="maisto" />
                <label htmlFor="maisto">Maisto</label>
              </li>
              <li>
                <input type="checkbox" id="dakott" />
                <label htmlFor="dakott">Dakott</label>
              </li>
            </ul>
            <div className="filter__price">
              <h5>Price</h5>
              <div className="filter__bar">
                <input type="range" min={0} max={2000000} step={100} defaultValue={100} />
                <input type="range" min={0} max={2000000} step={10} defaultValue={2000000} />
              </div>
              <div className="entry-fields">
                <p>&euro;0</p>
                <span></span>
                <p>&euro;2000000</p>
              </div>
            </div>
            <div className="filter__stock">
              <h5>Stock</h5>
              <div className="filter__bar">
                <input type="range" min={1} max={200} step={1} defaultValue={1} />
                <input type="range" min={1} max={200} step={1} defaultValue={200} />
              </div>
              <div className="entry-fields">
                <p>1</p>
                <span></span>
                <p>200</p>
              </div>
            </div>
            <button className="btn filter__btn-reset">Reset filters</button>
            <button className="btn">Copy link</button>
          </div>
        </form>

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
      </main>
      <hr />
      <footer>
        <div className="footer__left">
          <ul>
            <li>
              <img src="img/logo-github.svg" alt="logo github" width="22" height="22" />
              <span className="footer__author">
                <a href="https://github.com/scorpigg" target="_blank" rel="noreferrer">
                  Andrey Nikitin
                </a>
              </span>
            </li>
            <li>
              <img src="img/logo-github.svg" alt="logo github" width="22" height="22" />
              <span className="footer__author">
                <a href="https://github.com/istairina" target="_blank" rel="noreferrer">
                  Irina Migunova
                </a>
              </span>
            </li>
          </ul>
        </div>
        <div className="footer__left">
          <span>2023</span>
        </div>
        <div className="footer__center">
          <a href="https://rs.school/js/" target="_blank" rel="noreferrer">
            <img src="img/logo-rss.svg" alt="logo rss" width="121" height="45" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
