import React from 'react';
import SortList from './SortList';
import { products } from '../carBase';

interface IPropsSearch {
  searchValue: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  clearInput: () => void;
  numShowCars: number;
}

export function ItemsPanel(props: IPropsSearch) {
  const numCarsShow = () => {
    let strNumCars = '';
    switch (props.numShowCars) {
      case 0:
        strNumCars = 'No cars';
        break;
      case 1:
        strNumCars = '1 car';
        break;
      default:
        strNumCars = `${props.numShowCars} cars`;
    }
    return strNumCars;
  };

  return (
    <div className="items__panel">
      <p className="showItems">
        <span className="items__title">{numCarsShow()}</span>
        <br />
        <span className="items__total">from {products.length}</span>
      </p>
      <div className="items__sort">
        <SortList />
      </div>
      <div className="items__view">
        <div className="view-list"></div>
        <div className="view-table"></div>
      </div>
      <div className="search-block">
        <img src="img/search.svg" alt="Search" />
        <input onChange={props.onChange} value={props.searchValue} placeholder="Search..." />
        {props.searchValue && (
          <div className="search__reset" onClick={props.clearInput}>
            <div className="close-line"></div>
            <div className="close-line"></div>
          </div>
        )}
      </div>
    </div>
  );
}
