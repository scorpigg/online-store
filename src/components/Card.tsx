import React, { useState } from 'react';
import { IProducts } from '../carBase';

export function Card({ images, title, price }: IProducts) {
  const [isAdded, setIsAdded] = useState(false);
  const onAddclick = () => {
    setIsAdded(!isAdded);
  };
  return (
    <div className="card">
      <div className="card__img" style={{ backgroundImage: `url(./img/cars/${images[0]})` }}></div>
      <p className="card__title">{title}</p>
      <div className="card__bottom">
        <div className="card__price">
          <span className="price-text">Price:</span>
          <p className="price-container">
            <span>&euro;{price}</span>
          </p>
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
