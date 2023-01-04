import React, { useContext, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AppContext } from '../appContext';
import { IProducts } from '../carBase';

interface ICartProps {
  onIncreaseItemCount: (car: IProducts) => void;
  onDecreaseItemCount: (car: IProducts) => void;
}

export function Cart({ onIncreaseItemCount, onDecreaseItemCount }: ICartProps) {
  const { cartItems, itemsCount, onCartSubmit, isCartSubmit } = useContext(AppContext);
  const totalPrice = cartItems.reduce((acc, el) => acc + el.price * el.count, 0);
  const totalPriceWithDiscount = Math.round(
    cartItems.reduce(
      (acc, el) =>
        el.discountPercentage
          ? acc + (el.price * el.count - (el.price * el.count * el.discountPercentage) / 100)
          : el.price * el.count,
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

  const [name, setName] = useState('');
  const [nameEmpty, setNameEmpty] = useState(false);
  const [nameError, setNameError] = useState('Field can not be empty');

  const [phone, setPhone] = useState('');
  const [phoneEmpty, setPhoneEmpty] = useState(false);
  const [phoneError, setphoneError] = useState('Field can not be empty');

  const [address, setAddress] = useState('');
  const [addressEmpty, setAddressEmpty] = useState(false);
  const [addressError, setAddressError] = useState('Field can not be empty');

  const [email, setEmail] = useState('');
  const [emailEmpty, setEmailEmpty] = useState(false);
  const [emailError, setEmailError] = useState('Field can not be empty');

  const [cardNumber, setCardNumber] = useState('');
  const [cardNumberEmpty, setCardNumberEmpty] = useState(false);
  const [cardNumberError, setCardNumberError] = useState('Field can not be empty');

  const [cardValidity, setCardValidity] = useState('');
  const [cardValidityEmpty, setCardValidityEmpty] = useState(false);
  const [cardValidityError, setCardValidityError] = useState('Field can not be empty');

  const [cardCVV, setCardCVV] = useState('');
  const [cardCVVEmpty, setCardCVVEmpty] = useState(false);
  const [cardCVVError, setCardCVVError] = useState('Field can not be empty');

  const [formValid, setFormValid] = useState(false);

  const nameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const re = /[a-zA-Z] [a-zA-Z]/;

    if (!re.test(value)) {
      setNameError('Enter correct data (name surname)');
    } else {
      setNameError('');
    }
    setName(value);
  };

  const phoneHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;
    const re = /\+\d{9,}/;

    if (value[0] !== '+') {
      value = `+${value}`;
    }

    setPhone(value);
    if (!re.test(value)) {
      setphoneError('Enter correct data (+123456789)');
    } else {
      setphoneError('');
    }
  };

  const addressHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const re = /^\S[a-zA-Z].{3,}, ?[a-zA-Z].{4,}, ?[a-zA-Z].{4,}$/;

    setAddress(value);
    if (!re.test(value)) {
      setAddressError('Enter correct data (country, sity, street)');
    } else {
      setAddressError('');
    }
  };

  const emailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    setEmail(value);
    if (!re.test(value)) {
      setEmailError('Enter correct data (example@email.com)');
    } else {
      setEmailError('');
    }
  };

  const paymentSystems: { [key: string]: string } = {
    2: 'mir',
    4: 'visa',
    5: 'mastercard',
  };

  const cardNumberHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (value.length <= 19) {
      setCardNumber(
        value
          .replace(/\D/g, '')
          .replace(/\s/g, '')
          .replace(/(\d{4})(?!\s|$)/gm, '$1 ')
      );
    }
    if (value.length < 19) {
      setCardNumberError('Enter correct data (xxxx-xxxx-xxxx-xxxx)');
    } else {
      setCardNumberError('');
    }
  };

  const cardValidityHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;

    if (value.length <= 5) {
      if (+value[0] > 1 || (+value[0] !== 0 && +value[1] > 2)) {
        value = '';
      } else {
        setCardValidity(
          value
            .replace(/\D/g, '')
            .replace(/\s/g, '')
            .replace(/(\d{2})(?!\/|$)/gm, '$1/')
        );
      }
    }
    if (value.length < 5) {
      setCardValidityError('Enter correct data');
    } else {
      setCardValidityError('');
    }
  };

  const cardCVVHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (value.length <= 3) {
      setCardCVV(value);
    }
    if (value.length < 3) {
      setCardCVVError('Enter correct data');
    } else {
      setCardCVVError('');
    }
  };

  const blurHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (event.target.name) {
      case 'name':
        setNameEmpty(true);
        break;
      case 'phone':
        setPhoneEmpty(true);
        break;
      case 'address':
        setAddressEmpty(true);
        break;
      case 'email':
        setEmailEmpty(true);
        break;
      case 'cardNumber':
        setCardNumberEmpty(true);
        break;
      case 'cardValidity':
        setCardValidityEmpty(true);
        break;
      case 'cardCVV':
        setCardCVVEmpty(true);
        break;
    }
  };

  useEffect(() => {
    if (nameError || phoneError || addressError || emailError || cardNumberError || cardValidityError || cardCVVError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [nameError, phoneError, addressError, emailError, cardNumberError, cardValidityError, cardCVVError]);

  const [modalClose, isModalClose] = useState(true);

  const onModalClose = () => {
    isModalClose(!modalClose);
  };

  const [searchParams, setSearchParams] = useSearchParams();

  const cartQueryLimit = searchParams.get('limit') || '3';
  const cartQueryPage = searchParams.get('page') || '1';

  const lastPageIndex = +cartQueryPage * +cartQueryLimit;
  const firstPageIndex = lastPageIndex - +cartQueryLimit;
  const currentItems = cartItems.slice(firstPageIndex, lastPageIndex);

  const handleLimit = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    searchParams.set('limit', value);
    setSearchParams(searchParams);
  };

  const increasePage = () => {
    if (Math.ceil(cartItems.length / +cartQueryLimit) <= +cartQueryPage) {
      searchParams.set('page', cartQueryPage);
    } else {
      searchParams.set('page', (+cartQueryPage + 1).toString());
    }
    setSearchParams(searchParams);
  };
  const decreasePage = () => {
    if (+cartQueryPage <= 1) {
      searchParams.set('page', cartQueryPage);
    } else {
      searchParams.set('page', (+cartQueryPage - 1).toString());
    }
    setSearchParams(searchParams);
  };

  return cartItems.length === 0 && !isCartSubmit ? (
    <p className="cart-empty">Cart is empty. Add items, please</p>
  ) : !isCartSubmit ? (
    <div className="cart">
      <div className="cart-items__wrapper">
        <div className="cart-items__header">
          <h3 className="cart-items__title">Products in cart</h3>
          <div className="cart-items__limit">
            <label htmlFor="cart-limit">Limit: </label>
            <input id="cart-limit" type="number" name="limit" value={cartQueryLimit} onChange={handleLimit} />
          </div>
          <div className="cart-items__page">
            <span>Page: </span>
            <button onClick={decreasePage} className="cart-items__prev-page">
              &lt;
            </button>
            <span className="cart-items__current-page">{cartQueryPage}</span>
            <button onClick={increasePage} className="cart-items-next-page">
              &gt;
            </button>
          </div>
        </div>
        <div className="cart-items">
          {currentItems.map((cartItem, i) => (
            <div className="cart-item" key={cartItem.id}>
              <div className="cart-item__index">{i + 1}</div>
              <div
                className="cart-item__img"
                style={{ backgroundImage: `url(./img/cars/${cartItem.images[0]})` }}
              ></div>
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
      </div>
      <div className="cart-summary">
        <h3 className="cart-summary__title">Summary</h3>
        <p className="cart-summary__products">
          Products: <span>{itemsCount}</span>
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
        <button onClick={onModalClose} className="cart-summary__buy-btn btn">
          Buy now
        </button>
      </div>
      <div className={`buy-modal ${modalClose && 'hide-modal'}`}>
        <div onClick={onModalClose} className="buy-modal__overlay"></div>
        <form className="buy-form">
          <div onClick={onModalClose} className="close-btn"></div>
          <div className="user">
            <h4 className="user__title">Personal details</h4>
            <div className="modal-container">
              {nameEmpty && nameError && (
                <span className="error-text" style={{ color: 'red' }}>
                  {nameError}
                </span>
              )}
              <input
                onChange={nameHandler}
                onBlur={(e) => blurHandler(e)}
                value={name}
                className="user__name"
                name="name"
                type="name"
                placeholder="Enter your name and surname"
              />
            </div>
            <div className="modal-container">
              {phoneEmpty && phoneError && (
                <span className="error-text" style={{ color: 'red' }}>
                  {phoneError}
                </span>
              )}
              <input
                onChange={phoneHandler}
                onBlur={(e) => blurHandler(e)}
                value={phone}
                className="user__phone"
                name="phone"
                type="text"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="modal-container">
              {addressEmpty && addressError && (
                <span className="error-text" style={{ color: 'red' }}>
                  {addressError}
                </span>
              )}
              <input
                onChange={addressHandler}
                onBlur={(e) => blurHandler(e)}
                value={address}
                className="user__address"
                name="address"
                type="text"
                placeholder="Enter your address"
              />
            </div>
            <div className="modal-container">
              {emailEmpty && emailError && (
                <span className="error-text" style={{ color: 'red' }}>
                  {emailError}
                </span>
              )}
              <input
                onChange={emailHandler}
                onBlur={(e) => blurHandler(e)}
                value={email}
                className="user__email"
                name="email"
                type="email"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div className="bank-card">
            <h4 className="bank-card__title">Credit card details</h4>
            <div className="bank-card__top">
              <div
                className="bank-card__img"
                style={{ backgroundImage: `url(./img/${paymentSystems[cardNumber[0]] || 'no-logo'}.svg)` }}
              ></div>
              <div className="modal-container">
                {cardNumberEmpty && cardNumberError && (
                  <span className="error-text" style={{ color: 'red' }}>
                    {cardNumberError}
                  </span>
                )}
                <input
                  onChange={cardNumberHandler}
                  onBlur={(e) => blurHandler(e)}
                  value={cardNumber}
                  name="cardNumber"
                  className="bank-card__number"
                  type="text"
                  placeholder="Card number"
                />
              </div>
            </div>
            <div className="bank-card__bottom">
              <div className="modal-container">
                {cardValidityEmpty && cardValidityError && (
                  <span className="error-text" style={{ color: 'red' }}>
                    {cardValidityError}
                  </span>
                )}
                <input
                  onChange={cardValidityHandler}
                  onBlur={(e) => blurHandler(e)}
                  value={cardValidity}
                  name="cardValidity"
                  className="bank-card__validity"
                  type="text"
                  placeholder="Valid THRU"
                />
              </div>
              <div className="modal-container">
                {cardCVVEmpty && cardCVVError && (
                  <span className="error-text" style={{ color: 'red' }}>
                    {cardCVVError}
                  </span>
                )}
                <input
                  onChange={cardCVVHandler}
                  onBlur={(e) => blurHandler(e)}
                  value={cardCVV}
                  name="cardCVV"
                  className="bank-card__cvv"
                  type="number"
                  placeholder="CVV"
                />
              </div>
            </div>
          </div>
          <button onClick={(e) => onCartSubmit(e)} disabled={!formValid} className="btn btn-submit" type="submit">
            Confirm
          </button>
        </form>
      </div>
    </div>
  ) : (
    <p className="cart-order__completed">Thank you for your order! You will redirect to the main page soon.</p>
  );
}
