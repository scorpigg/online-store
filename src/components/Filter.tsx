import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { IProducts } from '../carBase';
import { FilterChckBoxes } from './FilterCategoryBrand';
import { FilterRange } from './FilterPriceStock';

type ProductsShow = {
  productsShow: IProducts[];
};

// type VisibleCars = {
//   visibleCars: IProducts[];
// };

export function Filter(props: ProductsShow) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [textBtn, setTextBtn] = useState('copy link');
  // console.log(props.productsShow[0]);

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

  // const [vsbleCars, setVsbleCars] = useState(props.visibleCars);
  useEffect(() => {
    // setVsbleCars(props.visibleCars);
    // console.log('filters props.visibleCars.length ' + props.visibleCars.length + ' from ' + products.length);
  }, [searchParams]);

  return (
    <form className="filter">
      <h4 className="filter__title">Filter</h4>
      <div className="filter__container">
        <FilterChckBoxes productsShow={props.productsShow} />
        {/* <FilterChckBoxes productsShow={props.productsShow} visibleCars={props.visibleCars}/> */}
        <FilterRange productsShow={props.productsShow} />
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
