import { ChangeEvent, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../carBase';

export function FilterSliders() {
  let maxPrice = products[0].price;
  let minPrice = products[1].price;
  products.forEach((item) => {
    if (item.price > maxPrice) {
      maxPrice = item.price;
    }
    if (item.price < minPrice) {
      minPrice = item.price;
    }
  });

  let maxStock = products[0].stock;
  let minStock = products[1].stock;
  products.forEach((item) => {
    if (item.stock > maxStock) {
      maxStock = item.stock;
    }
    if (item.stock < minStock) {
      minStock = item.stock;
    }
  });

  const initValue = [minPrice, maxPrice, minStock, maxStock];
  const [value, setValue] = useState(initValue);
  const idList = ['minPrice', 'maxPrice', 'minStock', 'maxStock'];

  // const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const isDiff = Boolean(value.find((elem, ind) => elem !== initValue[ind]));

  if (searchParams.toString().length === 0 && isDiff) {
    setValue(initValue);
  }

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target !== null) {
      const eTarget: HTMLInputElement = event.target;
      const indexTarget = idList.indexOf(eTarget.id);
      let isCorrect = true;
      switch (indexTarget) {
        case 0:
          if (+eTarget.value > value[1]) {
            isCorrect = false;
            eTarget.value = String(value[0]);
          }
          break;
        case 1:
          if (+eTarget.value < value[0]) {
            isCorrect = false;
            eTarget.value = String(value[1]);
          }
          break;
        case 2:
          if (+eTarget.value > value[3]) {
            isCorrect = false;
            eTarget.value = String(value[2]);
          }
          break;
        case 3:
          if (+eTarget.value < value[2]) {
            isCorrect = false;
            eTarget.value = String(value[3]);
          }
          break;
        default:
          console.log('unknown index target');
      }

      if (isCorrect) {
        const updateValue = [...value];
        updateValue[indexTarget] = Number(event.target.value);
        setValue(updateValue);
      }
    }

    searchParams.set('priceFilt', JSON.stringify([value[0], value[1]]));
    searchParams.set('stockFilt', JSON.stringify([value[2], value[3]]));
    setSearchParams(searchParams);
  };

  return (
    <div>
      <div className="filter__price">
        <h5>Price</h5>
        <div className="filter__bar">
          <input
            type="range"
            min={minPrice}
            max={maxPrice}
            step={100}
            defaultValue={minPrice}
            id={idList[0]}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleOnChange(e)}
          />
          <input
            type="range"
            min={minPrice}
            max={maxPrice}
            step={10}
            defaultValue={maxPrice}
            id={idList[1]}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleOnChange(e)}
          />
        </div>
        <div className="entry-fields">
          <p>&euro;{value[0]}</p>
          <span></span>
          <p>&euro;{value[1]}</p>
        </div>
      </div>
      <div className="filter__stock">
        <h5>Stock</h5>
        <div className="filter__bar">
          <input
            type="range"
            min={minStock}
            max={maxStock}
            step={1}
            defaultValue={minStock}
            id={idList[2]}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleOnChange(e)}
          />
          <input
            type="range"
            min={minStock}
            max={maxStock}
            step={1}
            defaultValue={maxStock}
            id={idList[3]}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleOnChange(e)}
          />
        </div>
        <div className="entry-fields">
          <p>{value[2]}</p>
          <span></span>
          <p>{value[3]}</p>
        </div>
      </div>
    </div>
  );
}
