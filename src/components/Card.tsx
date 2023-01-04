import React, { useContext } from 'react';
import { AppContext } from '../appContext';
import { IProducts } from '../carBase';
import { useNavigate } from 'react-router-dom';

interface IPropsAddItem extends IProducts {
  onPlus: (obj: IProducts) => void;
}

export function Card(props: IPropsAddItem) {
  const { isItemAdded, itemsView } = useContext(AppContext);

  const onAddclick = () => {
    props.onPlus(props);
  };
  const navigate = useNavigate();

  const openDescription = (id: number) => {
    navigate('car-description/' + id);
  };

  return itemsView === 'table' ? (
    <div className="card " id={'car' + props.id}>
      <div
        className="card__img"
        style={{ backgroundImage: `url(./img/cars/${props.images[0]})` }}
        onClick={() => openDescription(props.id)}
      ></div>
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
  ) : (
    <div className="card-list" key={props.id}>
      <div
        className="card-list__img"
        style={{ backgroundImage: `url(./img/cars/${props.images[0]})` }}
        onClick={() => openDescription(props.id)}
      ></div>
      <div className="card-list__center">
        <p className="card-list__title">{props.title}</p>
        <span className="card-list__desc">{props.description}</span>
        <div className="card-list__rating">
          <span className="rating-text">Rating:</span>
          <span className="rating-value">{props.rating}</span>
        </div>
        <div className="card-list__bottom">
          <div className="card-list__price">
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
    </div>
  );
}
