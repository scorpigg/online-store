import React, { useState, useRef, useEffect } from 'react';
import { Card } from '../components/Card';
import { Filter } from '../components/Filter';
import { IProducts, products } from '../carBase';
import { ItemsPanel } from '../components/ItemsPanel';
import { useLocation } from 'react-router-dom';

type homeProps = {
  onAddCartItem: (car: IProducts) => void;
};

export function Home(props: homeProps) {
  const search = useLocation().search;
  let productsShow: Array<IProducts> = [];

  if (search !== null) {
    const catQuery = new URLSearchParams(search).get('cat');
    const brandQuery = new URLSearchParams(search).get('brand');
    let cat: Array<string> = [];
    let brand: Array<string> = [];

    const sortByFilter = (carToSort: Array<IProducts>, prop: string, arrQuery: Array<string>) => {
      productsShow = [];
      carToSort.forEach((car) => {
        arrQuery.forEach((elemSearch) => {
          if (prop === 'category') {
            if (elemSearch === car.category) {
              productsShow.push(car);
            }
          }

          if (prop === 'brand') {
            if (elemSearch === car.brand[0] || elemSearch === car.brand[1]) {
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

    if (cat.length > 0 || brand.length > 0) {
      productsShow = [];
      if (cat.length > 0) {
        sortByFilter(products, 'category', cat);
      } else {
        sortByFilter(products, 'brand', brand);
      }
      if (cat.length > 0 && brand.length > 0) {
        sortByFilter(productsShow, 'brand', brand);
      }
    } else {
      products.map((car) => productsShow.push(car));
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
  }, []);
  const numShowCars = numCarCards;

  return (
    <main>
      <Filter />
      <div className="main-container">
        <ItemsPanel
          onChange={onChangeSearchInput}
          searchValue={searchValue}
          clearInput={clearInput}
          numShowCars={numShowCars}
        />
        <div className="cards" ref={elemRef}>
          {productsShow
            .filter((car) => car.title.toLowerCase().includes(searchValue.toLocaleLowerCase()))
            .map((car) => (
              <Card {...car} key={car.id} onPlus={(carObj) => props.onAddCartItem(carObj)} />
            ))}
        </div>
      </div>
    </main>
  );
}
