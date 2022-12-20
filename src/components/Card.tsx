import React from 'react';
import { IProducts } from '../carBase';

export function Card(props: IProducts) {
  return (
    <div className="card">
      <div className="card__img" style={{ backgroundImage: `url(./img/cars/${props.images[0]})` }}></div>
      <p className="card__title">{props.title}</p>
      <div className="card__bottom">
        <div className="card__price">
          <span className="price-text">Price:</span>

          {!props.discountPercentage ? (
            <p className="price-container">
              <span>&euro;{props.price}</span>
            </p>
          ) : (
            <p className="price-container">
              <span style={{ textDecoration: 'line-through', marginRight: '5px' }}>&euro;{props.price}</span>
              <span className="price-discount">
                &euro;{Math.round(props.price - (props.price * props.discountPercentage) / 100)}
              </span>
            </p>
          )}
        </div>
        <button className="card__add-to-cart"></button>
      </div>
    </div>
  );
}
