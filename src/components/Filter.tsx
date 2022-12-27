import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FilterChckBoxes } from './FilterCategoryBrand';
import { FilterSliders } from './FilterPriceStock';

export function Filter() {
  const navigate = useNavigate();
  const doReset = () => {
    navigate({
      pathname: '/',
    });
  };

  const doCopy = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  return (
    <form className="filter">
      <h4 className="filter__title">Filter</h4>
      <div className="filter__container">
        <FilterChckBoxes />
        <FilterSliders />
        <button className="btn filter__btn-reset" type="reset" onClick={doReset}>
          Reset filters
        </button>
        <button className="btn" onClick={doCopy} type="button">
          Copy link
        </button>
      </div>
    </form>
  );
}
