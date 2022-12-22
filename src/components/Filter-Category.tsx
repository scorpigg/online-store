import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from './../carBase';

type obj = {
  [key: number]: string;
};

export function FilterCat() {
  const catArr: Array<string> = [];
  products.map((car) => catArr.push(car.category));
  const cat = Array.from(new Set(catArr));
  const [checkedState, setCheckedState] = useState(new Array(cat.length).fill(false));
  const navigate = useNavigate();

  const handleOnChange = (position: number) => {
    const updatedCheckedState = checkedState.map((item, index) => (index === position ? !item : item));
    const obj: obj = { 0: 'Real car', 1: 'Kids car', 2: 'Scale car' };
    const res: Array<string> = [];
    updatedCheckedState.forEach((elem, index) => {
      if (elem) {
        res.push(obj[index]);
      }
    });

    if (res.length > 0) {
      navigate({
        pathname: '/',
        search: `cat=${JSON.stringify(res)}`,
      });
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
