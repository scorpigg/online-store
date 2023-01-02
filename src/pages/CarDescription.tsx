import React from 'react';
import { IProducts, products } from '../carBase';
import { Carousel } from '../components/Carousel';

export function CarDescription() {
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

  // const breadcrumbs = () => {
  //   return (<a href="/">Carfun</a> &lt; {currCar.category} > {currCar.brand[0]} > {currCar.title}`);
  // };

  return (
    <>
      <div className="carDescr__breadcrumbs">
        <a href="/">Carfun</a> &gt; {currCar.category} &gt; {currCar.brand[0]} &gt; {currCar.title}
      </div>
      <div className="carDescr" key={id}>
        <Carousel arrImages={currCar.images} />
        <div className="card-list__center">
          <p className="carDescr__title">{currCar.title}</p>
          <span className="carDescr__desc">{currCar.description}</span>
          <div className="carDescr__property">
            <span className="carDescr__propertyName">Body style:</span>
            <p className="carDescr__propertyText">{currCar.bodyStyle}</p>
          </div>
          <div className="carDescr__property">
            <span className="carDescr__propertyName">Color:</span>
            <div className="carcarDescr__samplecolor" style={{ background: currCar.color }}></div>
            <p className="carDescr__propertyText">{currCar.color}</p>
          </div>
          <div className="carDescr__property">
            <span className="carDescr__propertyName">Rating:</span>
            <span className="carDescr__propertyText">{currCar.rating}</span>
          </div>

          <div className="card-list__bottom">
            <div className="carDescr__property">
              <span className="carDescr__propertyName">Price:</span>
              <p className="carDescr__propertyText">&euro;{currCar.price}</p>
            </div>

            <button
              className="card__add-to-cart"
              // onClick={onAddclick}
              // style={isItemAdded(currCar.id) ? { backgroundImage: 'url(./img/btn-check.svg' } : undefined}
            ></button>
          </div>
        </div>
      </div>
    </>
  );
}
