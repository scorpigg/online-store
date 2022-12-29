import { ChangeEvent, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { IProducts, products } from '../carBase';

type ProductsShow = {
  productsShow: IProducts[];
};

export function FilterRange(props: ProductsShow) {
  let maxPrice = products[0].price;
  let minPrice = products[1].price;

  function maxminPrice(prodArr: IProducts[]) {
    prodArr.forEach((item) => {
      if (item.price > maxPrice) {
        maxPrice = item.price;
      }
      if (item.price < minPrice) {
        minPrice = item.price;
      }
    });
  }
  maxminPrice(products);

  let maxStock = products[0].stock;
  let minStock = products[1].stock;
  function maxminStock(prodArr: IProducts[]) {
    prodArr.forEach((item) => {
      if (item.stock > maxStock) {
        maxStock = item.stock;
      }
      if (item.stock < minStock) {
        minStock = item.stock;
      }
    });
  }
  maxminStock(products);

  const initValue = [minPrice, maxPrice, minStock, maxStock];

  const idList = ['minPrice', 'maxPrice', 'minStock', 'maxStock'];
  const [value, setValue] = useState(initValue);
  const [searchParams, setSearchParams] = useSearchParams();
  const [maxmin, setMaxmin] = useState([minPrice, maxPrice, minStock, maxStock]);
  // console.log(maxmin);
  const isDiff = Boolean(value.find((elem, ind) => elem !== initValue[ind]));

  if (searchParams.toString().length === 0 && isDiff) {
    setValue(initValue);
  }

  const updateValue: number[] = [...value];
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    // const newVal = [...value];
    if (event.target !== null) {
      const eTarget: HTMLInputElement = event.target;
      const indexTarget = idList.indexOf(eTarget.id);

      updateValue[indexTarget] = Number(eTarget.value);

      if (updateValue[0] > value[1]) {
        updateValue[0] = value[0];
      }
      if (updateValue[1] < value[0]) {
        updateValue[1] = value[1];
      }
      if (updateValue[2] > value[3]) {
        updateValue[2] = value[2];
      }
      if (updateValue[3] < value[2]) {
        updateValue[3] = value[3];
      }

      searchParams.set('priceFilt', JSON.stringify([updateValue[0], updateValue[1]]));
      searchParams.set('stockFilt', JSON.stringify([updateValue[2], updateValue[3]]));
      setSearchParams(searchParams);
    }
  };

  useEffect(() => {
    const valPrice = searchParams.get('priceFilt');
    const valStock = searchParams.get('stockFilt');
    maxminPrice(props.productsShow);
    maxminStock(props.productsShow);
    setMaxmin([minPrice, maxPrice, minStock, maxStock]);

    if (valPrice !== null) {
      const valPriceArr = JSON.parse(valPrice);
      updateValue[0] = valPriceArr[0];
      updateValue[1] = valPriceArr[1];
    }

    if (valStock !== null) {
      const valStockArr = JSON.parse(valStock);
      updateValue[2] = valStockArr[0];
      updateValue[3] = valStockArr[1];
    }

    setValue(updateValue);
  }, [searchParams]);

  return (
    <div>
      <div className="filter__price">
        <h5>Price</h5>
        <div className="filter__bar">
          <input
            type="range"
            min={maxmin[0]}
            max={maxmin[1]}
            step={100}
            value={value[0]}
            id={idList[0]}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleOnChange(e)}
          />
          <input
            type="range"
            min={maxmin[0]}
            max={maxmin[1]}
            step={100}
            value={value[1]}
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
            value={value[2]}
            id={idList[2]}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleOnChange(e)}
          />
          <input
            type="range"
            min={minStock}
            max={maxStock}
            step={1}
            value={value[3]}
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
