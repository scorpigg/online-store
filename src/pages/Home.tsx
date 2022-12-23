import React, { useState } from 'react';
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
  const productsShow: Array<IProducts> = [];
  if (search !== null) {
    const catQuery = new URLSearchParams(search).get('cat');
    let cat: Array<string> = [];
    if (catQuery) {
      cat = JSON.parse(catQuery);
    }
    if (cat.length > 0) {
      products.forEach((car) => {
        cat.forEach((elemSearch) => {
          if (elemSearch === car.category) {
            productsShow.push(car);
          }
        });
      });
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

  return (
    <main>
      <Filter />
      <div className="main-container">
        <ItemsPanel onChange={onChangeSearchInput} searchValue={searchValue} clearInput={clearInput} />
        <div className="cards">
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
