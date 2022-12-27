import React, { useState } from 'react';
import { IProducts } from '../carBase';

interface ICartProps {
  cartItems: IProducts[];
  onIncreaseItemCount: (car: IProducts) => void;
  onDecreaseItemCount: (car: IProducts) => void;
}

export function Basket({ cartItems, onIncreaseItemCount, onDecreaseItemCount }: ICartProps) {
  const totalPrice = cartItems.reduce((acc, el) => acc + el.price, 0);
  const totalPriceWithDiscount = Math.round(
    cartItems.reduce(
      (acc, el) => (el.discountPercentage ? acc + (el.price - (el.price * el.discountPercentage) / 100) : el.price),
      0
    )
  );
  const totalDiscount = Math.round(100 - (totalPriceWithDiscount * 100) / totalPrice);

  const [promoText, setPromoText] = useState('');
  const [addDiscount, setAddDiscount] = useState(false);

  const onAddDiscount = () => {
    setAddDiscount(!addDiscount);
  };

  const onChangePromoInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPromoText(event.target.value);
  };

  const onClickPlus = (car: IProducts) => {
    onIncreaseItemCount(car);
  };

  const onClickMinus = (car: IProducts) => {
    onDecreaseItemCount(car);
  };

  return cartItems.length === 0 ? (
    <p className="cart-empty">Cart is empty. Add items, please</p>
  ) : (
    <div className="cart">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <div className="cart-item" key={cartItem.id}>
            <div className="cart-item__img" style={{ backgroundImage: `url(./img/cars/${cartItem.images[0]})` }}></div>
            <div className="cart-item__center">
              <p className="cart-item__title">{cartItem.title}</p>
              <span className="cart-item__desc">{cartItem.description}</span>
              <div className="cart-item__bottom">
                <div className="cart-item__price">
                  <span className="price-text">Price:</span>
                  <p className="price-value">&euro;{cartItem.price}</p>
                </div>
                <div className="cart-item__rating">
                  <span className="rating-text">Rating:</span>
                  <span className="rating-value">{cartItem.rating}</span>
                </div>
                <div className="cart-item__stock">
                  <span className="stock-text">Stock:</span>
                  <span className="stock-value">{cartItem.stock}</span>
                </div>
              </div>
            </div>
            <div className="cart-item__right">
              <button onClick={() => onClickPlus(cartItem)}>+</button>
              <span className="cart-item__count">{cartItem.count}</span>
              <button onClick={() => onClickMinus(cartItem)}>-</button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h3 className="cart-summary__title">Summary</h3>
        <p className="cart-summary__products">
          Products: <span>{cartItems.length}</span>
        </p>
        {addDiscount ? (
          <p className="cart-summary__total-price">
            <span className="cart-summary__first-price">Total price: &euro;{totalPrice}</span>
            <span>Total price: &euro;{totalPriceWithDiscount}</span>
          </p>
        ) : (
          <p className="cart-summary__total-price">
            <span>Total price: &euro;{totalPrice}</span>
          </p>
        )}

        <input
          onChange={onChangePromoInput}
          value={promoText}
          type="text"
          className="cart-summary__promo"
          placeholder="Enter promo code"
        />
        {promoText === 'RS' && (
          <div className="cart-summary__discount">
            <span>Your discount is {totalDiscount}%</span>
            <button onClick={onAddDiscount} className="cart-summary__discount-btn btn">
              {addDiscount ? 'Drop' : 'Add'}
            </button>
          </div>
        )}
        <span className="cart-summary__promo-text">Promo for test: 'RS'</span>
        <button className="cart-summary__buy-btn btn">Buy now</button>
      </div>
    </div>
  );
}
