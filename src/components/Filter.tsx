import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FilterCat } from './FilterCategoryBrand';

export function Filter() {
  const navigate = useNavigate();
  const doReset = () => {
    navigate({
      pathname: '/',
    });
  };

  return (
    <form className="filter">
      <h4 className="filter__title">Filter</h4>
      <div className="filter__container">
        <FilterCat />
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
        <button className="btn filter__btn-reset" type="reset" onClick={doReset}>
          Reset filters
        </button>
        <button
          className="btn"
          onClick={() => {
            navigator.clipboard.writeText(window.location.href);
          }}
        >
          Copy link
        </button>
      </div>
    </form>
  );
}
