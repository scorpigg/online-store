import React, { useState } from 'react';
import { IProducts } from '../carBase';

interface IPropsAddItem extends IProducts {
  onPlus: (obj: IProducts) => void;
}

export function Card(props: IPropsAddItem) {
  const [isAdded, setIsAdded] = useState(false);

  const onAddclick = () => {
    setIsAdded(!isAdded);
    props.onPlus(props);
  };

  // props.carNum += 1;
  // console.log(props.carNum);

  return (
    <div className="card">
      <div className="card__img" style={{ backgroundImage: `url(./img/cars/${props.images[0]})` }}></div>
      <p className="card__title">{props.title}</p>
      <div className="card__bottom">
        <div className="card__price">
          <span className="price-text">Price:</span>
          <p className="price-value">&euro;{props.price}</p>
        </div>
        <button
          className="card__add-to-cart"
          onClick={onAddclick}
          style={isAdded ? { backgroundImage: 'url(./img/btn-check.svg' } : undefined}
        ></button>
      </div>
    </div>
  );
}
