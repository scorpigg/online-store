import React, { useEffect, useContext } from 'react';
import SortList from './SortList';
import { products } from '../carBase';
import { AppContext } from '../appContext';
import { useSearchParams } from 'react-router-dom';

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

  const { itemsView, onItemView } = useContext(AppContext);

  const [searchParams, setSearchParams] = useSearchParams();
  // const search = useLocation().search;
  // const viewQuery = new URLSearchParams(search).get('view');
  // let initView = 'table';
  // if (viewQuery) {
  //   initView = viewQuery;
  // }
  // const [itemsView, setItemsView] = useState(initView);

  const handlerClick = (val: string) => {
    // itemsView = val;
    searchParams.set('view', val);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    const queryView = searchParams.get('view');

    if (queryView !== null) {
      onItemView(queryView);
      // setItemsView(queryView);
    }
  }, [searchParams]);

  // if (searchParams.get('view') !== itemsView) {
  //   searchParams.set('view', itemsView);
  //   setSearchParams(searchParams);
  // }

  return (
    <div className="items__panel">
      <p className="items__count">
        <span className="items__title">{numCarsShow()}</span>
        <br />
        <span className="items__total">from {products.length}</span>
      </p>
      <div className="items__sort">
        <SortList />
      </div>
      <div className="items__view">
        <div
          onClick={() => handlerClick('table')}
          className={`view-table ${itemsView === 'table' ? 'view-table_active' : ''}`}
        ></div>
        <div
          onClick={() => handlerClick('list')}
          className={`view-list ${itemsView === 'list' ? 'view-list_active' : ''}`}
        ></div>
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
