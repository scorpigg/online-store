import React from 'react';
import SortList from './SortList';

export function ItemsPanel() {
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
        <input placeholder="Search..." />
        <div className="search__reset">
          <div className="close-line"></div>
          <div className="close-line"></div>
        </div>
      </div>
    </div>
  );
}
