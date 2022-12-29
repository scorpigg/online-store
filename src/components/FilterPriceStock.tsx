import { ChangeEvent, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { IProducts, products } from '../carBase';

type ProductsShow = {
  productsShow: IProducts[];
};

export function FilterRange(props: ProductsShow) {
  function maxminGet(prodArr: IProducts[]) {
    let maxPrice = 1;
    let minPrice = 100000;
    let maxStock = products[0].stock;
    let minStock = products[1].stock;
    prodArr.forEach((item) => {
      if (item.price > maxPrice) {
        maxPrice = item.price;
      }
      if (item.price < minPrice) {
        minPrice = item.price;
      }
    });

    prodArr.forEach((item) => {
      if (item.stock > maxStock) {
        maxStock = item.stock;
      }
      if (item.stock < minStock) {
        minStock = item.stock;
      }
    });
    return [minPrice, maxPrice, minStock, maxStock];
  }

  const initValue = maxminGet(products);

  const idList = ['minPrice', 'maxPrice', 'minStock', 'maxStock'];
  const [value, setValue] = useState(initValue);
  const [searchParams, setSearchParams] = useSearchParams();
  const [maxmin, setMaxmin] = useState(maxminGet(props.productsShow));
  const isDiff = Boolean(value.find((elem, ind) => elem !== initValue[ind]));

  if (searchParams.toString().length === 0 && isDiff) {
    setValue(initValue);
  }

  const updateValue: number[] = [...value];
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
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

    setMaxmin(maxminGet(props.productsShow));

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

  useEffect(() => {
    setMaxmin(maxminGet(props.productsShow));
  }, [props.productsShow]);

  return (
    <div>
      <div className="filter__price">
        <h5>Price</h5>
        <div className="filter__bar">
          <input
            type="range"
            min={initValue[0]}
            max={initValue[1]}
            step={100}
            value={maxmin[0]}
            id={idList[0]}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleOnChange(e)}
          />
          <input
            type="range"
            min={initValue[0]}
            max={initValue[1]}
            step={100}
            value={maxmin[1]}
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
            min={initValue[2]}
            max={initValue[3]}
            step={1}
            value={maxmin[2]}
            id={idList[2]}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleOnChange(e)}
          />
          <input
            type="range"
            min={initValue[2]}
            max={initValue[3]}
            step={1}
            value={maxmin[3]}
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
