import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { products } from './../carBase';

type obj = {
  [key: number]: string;
};

export function FilterCat() {
  // сreate array of unique category values
  const catArr: Array<string> = [];
  products.forEach((car) => {
    catArr.push(car.category);
  });
  const cat = Array.from(new Set(catArr));

  const navigate = useNavigate();

  const [checkedState, setCheckedState] = useState(new Array(cat.length).fill(false));
  const [searchParams, setSearchParams] = useSearchParams();

  const checkedStateSet = new Set(checkedState);
  if (searchParams.toString().length === 0 && checkedStateSet.size > 1) {
    setCheckedState(new Array(cat.length).fill(false));
  }

  searchParams.delete('cat');

  const handleOnChange = (position: number) => {
    const updatedCheckedState = checkedState.map((item, index) => (index === position ? !item : item));
    const obj: obj = { 0: 'Real car', 1: 'Kids car', 2: 'Scale car' };
    const res: Array<string> = [];
    updatedCheckedState.forEach((elem, index) => {
      if (elem) {
        res.push(obj[index]);
      }
    });

    if (res.length > 0 || searchParams.get('brand')) {
      if (res.length > 0) {
        searchParams.set('cat', JSON.stringify(res));
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
    <ul className="filter__categories">
      <h5>Category</h5>
      {cat.map((elem, index) => {
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
  );
}
