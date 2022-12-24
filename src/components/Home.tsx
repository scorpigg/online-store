import { Card } from './Card';
import { Filter } from './Filter';
import { IProducts, products } from '../carBase';
import { ItemsPanel } from './ItemsPanel';
import { useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

export function Home() {
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

  return (
    <div className="wrapper">
      <Header />
      <hr />
      <main>
        <Filter />
        <div className="main-container">
          <ItemsPanel />
          <div className="cards">
            {productsShow.map((car) => (
              <Card {...car} key={car.id} />
            ))}
          </div>
        </div>
      </main>
      <hr />
      <Footer />
    </div>
  );
}
