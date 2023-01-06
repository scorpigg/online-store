import { ChangeEvent, useState, useEffect, useCallback, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { IProducts, products } from '../carBase';
import { debounce } from 'lodash';
import { AppContext } from '../appContext';

type ProductsShow = {
  productsShow: IProducts[];
};

export function FilterRange(props: ProductsShow) {
  const [priceTitle, setPriceTitle] = useState('Price');
  const [stockTitle, setStockTitle] = useState('Stock');
  const idList = ['minPrice', 'maxPrice', 'minStock', 'maxStock'];
  const { visibleCars } = useContext(AppContext);

  function maxminGet(prodArr: IProducts[]) {
    let maxPrice = 0;
    let minPrice = 10000000;
    let maxStock = 0;
    let minStock = 10000000;
    if (prodArr.length === 0) {
      return [70, 200000, 1, 110];
    }
    // priceTitle = 'Price';pro
    // stockTitle = 'Stock';
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
    // console.log([minPrice, maxPrice, minStock, maxStock]);
    return [minPrice, maxPrice, minStock, maxStock];
  }

  const initValues = maxminGet(products);
  // console.log(initValues);
  const [values, setValues] = useState(initValues);

  const [searchParams, setSearchParams] = useSearchParams();
  // if (searchParams.toString().length !== 0) {
  //   setValues(queryToValues());
  // }

  const queryToValues = () => {
    // console.log(3);
    const valPrice = searchParams.get('priceFilt');
    const valStock = searchParams.get('stockFilt');
    if (!valPrice && !valStock) {
      return initValues;
    }
    const updateValue = [...values];
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
    return updateValue;
  };

  const delayRangeReading = useCallback(
    debounce((updateValues) => {
      if (updateValues[0] > values[1]) {
        updateValues[0] = values[0];
      }
      if (updateValues[1] < values[0]) {
        updateValues[1] = values[1];
      }
      if (updateValues[2] > values[3]) {
        updateValues[2] = values[2];
      }
      if (updateValues[3] < values[2]) {
        updateValues[3] = values[3];
      }
      searchParams.set('priceFilt', JSON.stringify([updateValues[0], updateValues[1]]));
      searchParams.set('stockFilt', JSON.stringify([updateValues[2], updateValues[3]]));
      setSearchParams(searchParams);
    }, 100),
    []
  );

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target !== null) {
      const eTarget: HTMLInputElement = event.target;
      const indexTarget = idList.indexOf(eTarget.id);
      const updateValues = [...values];
      updateValues[indexTarget] = Number(eTarget.value);
      delayRangeReading(updateValues);
    }
  };

  const [catQuery, setCatQuery] = useState(searchParams.get('cat'));
  const [brandQuery, setBrandQuery] = useState(searchParams.get('brand'));
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search'));

  useEffect(() => {
    // setValues(queryToValues());
    // // console.log('brand');
    // const catQueryNew = searchParams.get('cat');
    // const brandQueryNew = searchParams.get('brand');
    // if (catQuery !== catQueryNew || brandQuery !== brandQueryNew) {
    //   setCatQuery(catQueryNew);
    //   setBrandQuery(brandQueryNew);
    //   if (visibleCars.length !== 0) {
    //     setValues(maxminGet(visibleCars));
    //   }
    // } else {
    //   setValues(queryToValues());
    // }
  }, [searchParams, visibleCars]);

  useEffect(() => {
    // console.log(visibleCars.length);
    if (visibleCars.length === 0) {
      setPriceTitle('Not Found');
      setStockTitle('Not Found');
    } else {
      setPriceTitle('Price');
      setStockTitle('Stock');
    }
    const catQueryNew = searchParams.get('cat');
    const brandQueryNew = searchParams.get('brand');
    const searchQueryNew = searchParams.get('search');
    if (catQuery !== catQueryNew || brandQuery !== brandQueryNew || searchQuery !== searchQueryNew) {
      setCatQuery(catQueryNew);
      setBrandQuery(brandQueryNew);
      setSearchQuery(searchQueryNew);
      if (visibleCars.length !== 0) {
        setValues(maxminGet(visibleCars));
      }
    } else {
      setValues(queryToValues());
    }
  }, [visibleCars]);

  return (
    <div>
      <div className="filter__price">
        <h5>{priceTitle}</h5>
        <div className="filter__bar">
          <input
            type="range"
            min={initValues[0]}
            max={initValues[1]}
            value={values[0]}
            step={100}
            id={idList[0]}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleOnChange(e)}
          />
          <input
            type="range"
            min={initValues[0]}
            max={initValues[1]}
            value={values[1]}
            step={100}
            id={idList[1]}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleOnChange(e)}
          />
        </div>
        <div className="entry-fields">
          <p>&euro;{values[0]}</p>
          <span></span>
          <p>&euro;{values[1]}</p>
        </div>
      </div>
      <div className="filter__stock">
        <h5>{stockTitle}</h5>
        <div className="filter__bar">
          <input
            type="range"
            min={initValues[2]}
            max={initValues[3]}
            step={1}
            value={values[2]}
            id={idList[2]}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleOnChange(e)}
          />
          <input
            type="range"
            min={initValues[2]}
            max={initValues[3]}
            step={1}
            value={values[3]}
            id={idList[3]}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleOnChange(e)}
          />
        </div>
        <div className="entry-fields">
          <p>{values[2]}</p>
          <span></span>
          <p>{values[3]}</p>
        </div>
      </div>
    </div>
  );
}
