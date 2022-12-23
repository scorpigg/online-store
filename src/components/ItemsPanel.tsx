import React from 'react';
import SortList from './SortList';

interface IPropsSearch {
  searchValue: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  clearInput: () => void;
}

export function ItemsPanel(props: IPropsSearch) {
  return (
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
