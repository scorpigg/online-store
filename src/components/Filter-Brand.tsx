import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import { products } from './../carBase';

export function FilterBrand() {
  const catArr: Array<string> = [];
  products.forEach((car) => {
    catArr.push(car.brand[0]);
  });
  const cat = Array.from(new Set(catArr));

  const navigate = useNavigate();

  const [checkedState, setCheckedState] = useState(new Array(cat.length).fill(false));

  const [searchParams, setSearchParams] = useSearchParams();
  searchParams.delete('brand');

  const handleOnChangeBrand = (position: number) => {
    const updatedCheckedState = checkedState.map((item, index) => (index === position ? !item : item));
    const res: Array<string> = [];
    updatedCheckedState.forEach((elem, index) => {
      if (elem) {
        res.push(cat[index]);
      }
    });

    if (res.length > 0 || searchParams.get('cat')) {
      if (res.length > 0) {
        searchParams.set('brand', JSON.stringify(res));
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
    <ul className="filter__brand">
      <h5>Brand</h5>
      {cat.map((elem, index) => {
        return (
          <li key={index + 3}>
            <input
              type="checkbox"
              id={`custom-checkbox-${index + 3}`}
              name={elem}
              value={elem}
              checked={checkedState[index]}
              onChange={() => handleOnChangeBrand(index)}
            />
            <label htmlFor={`custom-checkbox-${index + 3}`}>{elem}</label>
          </li>
        );
      })}
    </ul>
  );
}
