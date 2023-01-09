import React, { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../appContext';
import { IProducts, products } from '../carBase';
import { Carousel } from '../components/Carousel';

export function CarDescription() {
  const { isItemAdded, onAddCartItem, buyModalClose } = useContext(AppContext);
  const urlArr = window.location.pathname.split('/');
  const id = urlArr[urlArr.length - 1];
  const numId = Number(id);
  let currCar: IProducts = products[0];
  for (let i = 0; i < products.length; i++) {
    if (numId === products[i].id) {
      currCar = products[i];
      break;
    }
  }

  const itemId = Number(useParams().id);
  const item = products.find((el) => el.id === itemId);
  const navigate = useNavigate();

  useEffect(() => {
    if (!item) {
      navigate('/NotFound');
    }
  });

  const addToCartHandler = () => {
    if (item) {
      onAddCartItem(item);
    }
  };

  const buyHandler = () => {
    if (isItemAdded(itemId)) {
      navigate('/cart');
    } else {
      addToCartHandler();
      navigate('/cart');
    }
    buyModalClose();
  };

  return (
    <>
      <div className="carDescr__breadcrumbs">
        <a href="/">Carfun</a> &gt; {currCar.category} &gt; {currCar.brand[0]} &gt; {currCar.title}
      </div>
      <div className="carDescr" key={id}>
        <Carousel arrImages={currCar.images} />
        <div className="cardDescr__container">
          <div className="carDescr__top">
            <p className="carDescr__title">{currCar.title}</p>
            <span className="carDescr__desc">{currCar.description}</span>
            <div className="carDescr__property">
              <span className="carDescr__propertyName">Category:</span>
              <p className="carDescr__propertyText">{currCar.category}</p>
            </div>
            <div className="carDescr__property">
              <span className="carDescr__propertyName">Body style:</span>
              <p className="carDescr__propertyText">{currCar.bodyStyle}</p>
            </div>
            <div className="carDescr__property">
              <span className="carDescr__propertyName">Color:</span>
              <div className="carcarDescr__samplecolor" style={{ background: currCar.color }}></div>
            </div>
            <div className="carDescr__property">
              <span className="carDescr__propertyName">Rating:</span>
              <span className="carDescr__propertyText">{currCar.rating}</span>
            </div>
            <div className="carDescr__property">
              <span className="carDescr__propertyName">Price:</span>
              <p className="carDescr__propertyText">&euro;{currCar.price}</p>
            </div>
          </div>
          <div className="cardDescr__bottom">
            <button onClick={buyHandler} className="btn">
              BUY NOW
            </button>
            <button onClick={addToCartHandler} className="btn">
              {isItemAdded(itemId) ? 'Remove from car' : 'Add to cart'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
