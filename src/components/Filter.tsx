import React from 'react';
import { FilterCat } from './Filter-Category';

export function Filter() {
  return (
    <form className="filter">
      <h4 className="filter__title">Filter</h4>
      <div className="filter__container">
        {/* <ul className="filter__categories">
          {products.map(({category}, index) => {

          })}
          <h5>Category</h5>
          <li>
            <input type="checkbox" id="real-car" checked={isChecked} onChange={handleOnChange} />
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
        </ul> */}
        <FilterCat />
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
  );
}
