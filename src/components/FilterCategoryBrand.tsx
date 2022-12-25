import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { IProducts, products } from '../carBase';

// type obj = {
//   [key: number]: string;
// };

export function FilterChckBoxes() {
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

  const navigate = useNavigate();

  const [checkedState, setCheckedState] = useState(new Array(checkboxAmount).fill(false));
  const [searchParams, setSearchParams] = useSearchParams();

  const checkedStateSet = new Set(checkedState);
  if (searchParams.toString().length === 0 && checkedStateSet.size > 1) {
    setCheckedState(new Array(checkboxAmount).fill(false));
  }

  const newArr = checkedState;
  newArr[2] = true;
  //setCheckedState(newArr);

  const handleOnChange = (position: number) => {
    const updatedCheckedState = checkedState.map((item, index) => (index === position ? !item : item));

    const resCat: Array<string> = [];
    const resBrand: Array<string> = [];
    updatedCheckedState.forEach((elem, index) => {
      if (elem && index < 3) {
        resCat.push(checkNameList[index]);
      }
      if (elem && index >= 3) {
        resBrand.push(checkNameList[index]);
      }
    });

    if (resCat.concat(resBrand).length > 0) {
      if (resCat.length > 0) {
        searchParams.set('cat', JSON.stringify(resCat));
      } else {
        searchParams.delete('cat');
      }
      if (resBrand.length > 0) {
        searchParams.set('brand', JSON.stringify(resBrand));
      } else {
        searchParams.delete('brand');
      }

      setSearchParams(searchParams);
    } else {
      navigate({
        pathname: '/',
      });
    }
    setCheckedState(updatedCheckedState);
  };

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
              <label htmlFor={`custom-checkbox-${index}`}>{elem}</label>
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
              <label htmlFor={`custom-checkbox-${index + catList.length}`}>{elem}</label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
