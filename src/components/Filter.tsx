import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FilterChckBoxes } from './FilterCategoryBrand';
import { FilterRange } from './FilterPriceStock';

export function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [textBtn, setTextBtn] = useState('copy link');

  const doReset = () => {
    searchParams.delete('cat');
    searchParams.delete('brand');
    searchParams.delete('priceFilt');
    searchParams.delete('stockFilt');
    searchParams.delete('search');
    setSearchParams(searchParams);
  };

  const doCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setTextBtn('Done!');
    setTimeout(() => setTextBtn('Copy link'), 1500);
  };

  return (
    <form className="filter">
      <h4 className="filter__title">Filter</h4>
      <div className="filter__container">
        <FilterChckBoxes />
        <FilterRange />
        <button className="btn filter__btn-reset" type="reset" onClick={doReset}>
          Reset filters
        </button>
        <button className="btn" onClick={doCopy} type="button">
          {textBtn}
        </button>
      </div>
    </form>
  );
}
