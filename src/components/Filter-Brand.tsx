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

  //check if it's the root page reset current state to false
  const checkedStateSet = new Set(checkedState);
  if (searchParams.toString().length === 0 && checkedStateSet.size > 1) {
    setCheckedState(new Array(cat.length).fill(false));
  }

  // const newCheckedOfQuery = new Array(cat.length).fill(false);
  // if (searchParams.toString().length > 0) {
  //   const findInQuery = searchParams.getAll('brand');
  //   // console.log(JSON.parse(findInQuery[0]));
  //   JSON.parse(findInQuery[0]).forEach((elem: string) => {
  //     console.log(elem);
  //     console.log('find');
  //     const indexOfElem = cat.indexOf(elem);
  //     // console.log(cat.indexOf(elem.replace(/['"[\]']+/g, '')));
  //     console.log(newCheckedOfQuery[indexOfElem]);
  //     newCheckedOfQuery[indexOfElem] = true;
  //     console.log(newCheckedOfQuery[indexOfElem]);
  //     setCheckedState(newCheckedOfQuery);
  //   });
  //   // if (newCheckedOfQuery !== checkedState) {
  //   //   console.log('newCheckedOfQuery');
  //   //   console.log(newCheckedOfQuery);
  //   // setCheckedState(newCheckedOfQuery);

  //   //   console.log('checked state');
  //   //   console.log(checkedState);
  //   //   console.log('not equal');
  //   // }

  //   // if (checkedArr !== null) {
  //   //   if (cat[0] === checkedArr[0]?.replace(/['"\[\]']+/g, '')) {
  //   //     console.log('identical');
  //   //   }
  //   //   console.log(cat[0] + ' ' + checkedArr[0]);
  //   // }
  // }
  // // console.log(searchParams.get('brand'));

  searchParams.delete('brand');

  const handleOnChangeBrand = (position: number) => {
    const updatedCheckedState = checkedState.map((item, index) => (index === position ? !item : item));
    const res: Array<string> = [];
    updatedCheckedState.forEach((elem, index) => {
      if (elem) {
        res.push(cat[index]);
      }
    });
    setCheckedState(updatedCheckedState);
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
    // setCheckedState(updatedCheckedState);
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
