import React, { useContext } from 'react';
import { AppContext } from '../appContext';
import { IProducts } from '../carBase';

interface IPropsAddItem extends IProducts {
  onPlus: (obj: IProducts) => void;
}

export function Card(props: IPropsAddItem) {
  const { isItemAdded } = useContext(AppContext);

  const onAddclick = () => {
    props.onPlus(props);
  };

  return (
    <div className="card " id={'car' + props.id}>
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
          style={isItemAdded(props.id) ? { backgroundImage: 'url(./img/btn-check.svg' } : undefined}
        ></button>
      </div>
    </div>
  );
}
