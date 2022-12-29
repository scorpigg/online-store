import React, { useState, useRef, useEffect, useContext } from 'react';
import { Card } from '../components/Card';
import { Filter } from '../components/Filter';
import { IProducts, products } from '../carBase';
import { ItemsPanel } from '../components/ItemsPanel';
import { useLocation } from 'react-router-dom';
import { AppContext } from '../appContext';

type homeProps = {
  onAddCartItem: (car: IProducts) => void;
};

export function Home(props: homeProps) {
  const search = useLocation().search;
  let productsShow: Array<IProducts> = [...products];

  if (search !== null) {
    const catQuery = new URLSearchParams(search).get('cat');
    const brandQuery = new URLSearchParams(search).get('brand');
    const priceQuery = new URLSearchParams(search).get('priceFilt');
    const stockQuery = new URLSearchParams(search).get('stockFilt');
    const sortQuery = new URLSearchParams(search).get('sort');
    let cat: Array<string> = [];
    let brand: Array<string> = [];
    let price: Array<string> = [];
    let stock: Array<string> = [];

    const sortByFilter = (carToSort: Array<IProducts>, prop: string, arrQuery: Array<string>) => {
      productsShow = [];
      carToSort.forEach((car) => {
        arrQuery.forEach((elemSearch) => {
          if (prop === 'category') {
            if (elemSearch === car.category) {
              productsShow.push(car);
              const newSet = Array.from(new Set(productsShow));
              productsShow = newSet;
            }
          }

          if (prop === 'brand') {
            if (elemSearch === car.brand[0] || elemSearch === car.brand[1]) {
              productsShow.push(car);
              const newSet = Array.from(new Set(productsShow));
              productsShow = newSet;
            }
          }

          if (prop === 'price') {
            if (car.price >= Number(arrQuery[0]) && car.price <= Number(arrQuery[1])) {
              productsShow.push(car);
              const newSet = Array.from(new Set(productsShow));
              productsShow = newSet;
            }
          }

          if (prop === 'stock') {
            if (car.stock >= Number(arrQuery[0]) && car.stock <= Number(arrQuery[1])) {
              productsShow.push(car);
              const newSet = Array.from(new Set(productsShow));
              productsShow = newSet;
            }
          }
        });
      });
    };

    if (catQuery) {
      cat = JSON.parse(catQuery);
    }
    if (brandQuery) {
      brand = JSON.parse(brandQuery);
    }

    if (priceQuery) {
      price = JSON.parse(priceQuery);
    }

    if (stockQuery) {
      stock = JSON.parse(stockQuery);
    }

    if (cat.length > 0 || brand.length > 0 || price.length > 0 || stock.length > 0) {
      products.map((car) => productsShow.push(car));

      if (cat.length > 0) {
        sortByFilter(productsShow, 'category', cat);
      }
      if (brand.length > 0) {
        sortByFilter(productsShow, 'brand', brand);
      }
      if (price.length > 0) {
        sortByFilter(productsShow, 'price', price);
      }
      if (stock.length > 0) {
        sortByFilter(productsShow, 'stock', stock);
      }
    }

    if (sortQuery) {
      switch (Number(sortQuery)) {
        case 1:
          productsShow.sort((a, b) => (a.price > b.price ? 1 : -1));
          break;
        case 2:
          productsShow.sort((a, b) => (a.price > b.price ? -1 : 1));
          break;
        case 3:
          productsShow.sort((a, b) => (a.stock > b.stock ? 1 : -1));
          break;
        case 4:
          productsShow.sort((a, b) => (a.stock > b.stock ? -1 : 1));
          break;
        default:
          productsShow.sort((a, b) => (a.id > b.id ? 1 : -1));
      }
    }
  }

  const [searchValue, setSearchValue] = useState('');
  const onChangeSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const clearInput = () => {
    setSearchValue('');
  };

  //count showing car cards an pass it to ItemsPanel
  const [numCarCards, setNumCarCards] = useState(0);
  const elemRef = useRef(null);
  useEffect(() => {
    if (elemRef.current !== null) {
      const currRef: HTMLDivElement = elemRef.current;
      setNumCarCards(currRef.childNodes.length);
    }
  }, [productsShow]);
  const numShowCars = numCarCards;

  const { itemsView } = useContext(AppContext);

  return (
    <main>
      <Filter productsShow={productsShow} />
      <div className="main-container">
        <ItemsPanel
          onChange={onChangeSearchInput}
          searchValue={searchValue}
          clearInput={clearInput}
          numShowCars={numShowCars}
        />
        <div className={itemsView === 'table' ? 'cards' : 'cards-list'} ref={elemRef}>
          {productsShow
            .filter((car) => car.title.toLowerCase().includes(searchValue.toLocaleLowerCase()))
            .map((car) => (
              <Card {...car} key={car.id} onPlus={(carObj) => props.onAddCartItem(carObj)} />
            ))}
        </div>
        {!numShowCars && (
          <div className="show">
            <p className="nocars">There's no one car according to your query</p>
          </div>
        )}
      </div>
    </main>
  );
}
