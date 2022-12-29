import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { IProducts, products } from '../carBase';

// type obj = {
//   [key: number]: string;
// };

const createUniqueNameList = (prop: string) => {
  let result: string[];
  switch (prop) {
    case 'category':
      result = Array.from(new Set(products.map((item: IProducts) => item.category)));
      break;
    case 'brand':
      result = Array.from(new Set(products.map((item: IProducts) => item.brand[0])));
      break;
    default:
      result = ['error'];
      break;
  }
  return result;
};

const catList = createUniqueNameList('category');
const brandList = createUniqueNameList('brand');
brandList.sort();
const checkNameList = catList.concat(brandList);
const checkboxAmount = catList.length + brandList.length;

type ProductsShow = {
  productsShow: IProducts[];
};

export function FilterChckBoxes(props: ProductsShow) {
  const [checkedState, setCheckedState] = useState(new Array(checkboxAmount).fill(false));
  const [searchParams, setSearchParams] = useSearchParams();

  const checkedStateSet = new Set(checkedState);
  if (searchParams.toString().length === 0 && checkedStateSet.size > 1) {
    setCheckedState(new Array(checkboxAmount).fill(false));
  }

  const handleOnChange = (position: number) => {
    const getBrand = searchParams.get('brand');
    let getBrandArr: string[] = [];
    if (getBrand !== null) {
      getBrandArr = JSON.parse(getBrand);
    }
    if (getBrandArr.find((elem) => elem === brandList[position - 3])) {
      getBrandArr.splice(getBrandArr.indexOf(brandList[position - 3]), 1);
    } else {
      if (brandList[position - 3]) {
        getBrandArr.push(brandList[position - 3]);
      }
    }
    if (getBrandArr.length > 0) {
      searchParams.set('brand', JSON.stringify(getBrandArr));
    } else {
      searchParams.delete('brand');
    }

    const getCat = searchParams.get('cat');
    let getCatArr: string[] = [];
    if (getCat !== null) {
      getCatArr = JSON.parse(getCat);
    }
    if (getCatArr.find((elem) => elem === catList[position])) {
      getCatArr.splice(getCatArr.indexOf(catList[position]), 1);
    } else {
      if (catList[position]) {
        getCatArr.push(catList[position]);
      }
    }

    if (getCatArr.length > 0) {
      searchParams.set('cat', JSON.stringify(getCatArr));
    } else {
      searchParams.delete('cat');
    }

    setSearchParams(searchParams);
  };

  useEffect(() => {
    const checkBrand = searchParams.get('brand');
    const checkCat = searchParams.get('cat');
    const updatedCheckedState: boolean[] = new Array(checkboxAmount).fill(false);

    if (checkBrand !== null) {
      const checkBrandArr = JSON.parse(checkBrand);
      checkBrandArr.forEach((elem: string) => {
        updatedCheckedState[checkNameList.indexOf(elem)] = true;
      });
    }

    if (checkCat !== null) {
      const checkCatArr = JSON.parse(checkCat);
      checkCatArr.forEach((elem: string) => {
        updatedCheckedState[checkNameList.indexOf(elem)] = true;
      });
    }

    setCheckedState(updatedCheckedState);
  }, [searchParams]);

  function isInCat(index: number) {
    let bool = false;
    props.productsShow.forEach((elem) => {
      if (catList[index] === elem.category) {
        bool = true;
      }
    });
    return bool;
  }

  function isInBrand(index: number) {
    let bool = false;
    props.productsShow.forEach((elem) => {
      if (brandList[index] === elem.brand[0] || brandList[index] === elem.brand[1]) {
        bool = true;
      }
    });
    return bool;
  }

  return (
    <div>
      <ul className="filter__categories">
        <h5>Category</h5>
        {catList.map((elem, index) => {
          return (
            <li key={index}>
              <input
                type="checkbox"
                id={`custom-checkbox-${index}`}
                name={elem}
                value={elem}
                checked={checkedState[index]}
                onChange={() => handleOnChange(index)}
              />
              <label htmlFor={`custom-checkbox-${index}`} className={isInCat(index) ? '' : 'inactive'}>
                {elem}
              </label>
            </li>
          );
        })}
      </ul>
      <ul className="filter__brand">
        <h5>Brand</h5>
        {brandList.map((elem, index) => {
          return (
            <li key={index + catList.length}>
              <input
                type="checkbox"
                id={`custom-checkbox-${index + catList.length}`}
                name={elem}
                value={elem}
                checked={checkedState[index + catList.length]}
                onChange={() => handleOnChange(index + catList.length)}
              />
              <label
                htmlFor={`custom-checkbox-${index + catList.length}`}
                className={isInBrand(index) ? '' : 'inactive'}
              >
                {elem}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
