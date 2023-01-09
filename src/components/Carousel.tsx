import React, { useState } from 'react';

type arrImgs = {
  arrImages: Array<string>;
};

export function Carousel(props: arrImgs) {
  let arrImages = props.arrImages;
  switch (arrImages.length) {
    case 1:
      arrImages.push(props.arrImages[0]);
      arrImages.push(props.arrImages[0]);
      break;
    case 2:
      arrImages.push(props.arrImages[0]);
      break;
    default:
      arrImages = [...props.arrImages];
  }

  const defaultState: number[] = arrImages.map((item, ind) => {
    return ind;
  });
  const [items, setItems] = useState(defaultState);
  const [slide, setSlide] = useState(0);
  let currOrder = items;
  const changeSlide = (direction: number) => {
    currOrder = items;
    if (direction < 0) {
      const moveElemIndex = currOrder.shift();
      if (moveElemIndex || moveElemIndex === 0) {
        currOrder.push(moveElemIndex);
      }
    }

    if (direction > 0) {
      const currOrder = items;
      const moveElemIndex = currOrder.pop();
      if (moveElemIndex || moveElemIndex === 0) {
        currOrder.unshift(moveElemIndex);
      }
    }
    setItems(currOrder);
    setSlide(items[0]);
  };

  const [isPopupOpen, changeIsOpen] = useState(false);
  const popup = () => {
    changeIsOpen(!isPopupOpen);
  };

  return (
    <>
      <div className="carDescr__imgbox">
        <div className="carDescr_arrow left" onClick={() => changeSlide(-1)}></div>
        <div className="carDescr_imagewindow">
          <div className="carDescr__imgContainer">
            <div
              className="carDescr__img prev"
              style={{ backgroundImage: `url(../img/cars/${arrImages[items[items.length - 1]]})` }}
            ></div>
            <div
              className="carDescr__img"
              style={{ backgroundImage: `url(../img/cars/${arrImages[slide]})` }}
              onClick={() => popup()}
            ></div>
            <div
              className="carDescr__img next"
              style={{ backgroundImage: `url(../img/cars/${arrImages[items[1]]})` }}
            ></div>
          </div>
        </div>
        <div className="carDescr_arrow right" onClick={() => changeSlide(1)}></div>
      </div>
      {isPopupOpen && (
        <>
          <div className="carDescr__fullsize-bg" onClick={() => popup()}></div>
          <div className="carDescr__fullsize-popup">
            <div className="fullsize__arrowbox">
              <div className="carDescr_arrow left fullsize-arrows" onClick={() => changeSlide(-1)}></div>
              <div className="carDescr_arrow right fullsize-arrows" onClick={() => changeSlide(1)}></div>
            </div>
            <div className="fullsize__window">
              <div className="fullsize__image-container">
                <div
                  className="carDescr__img prev image"
                  style={{ backgroundImage: `url(../img/cars/${arrImages[items[items.length - 1]]})` }}
                ></div>
                <div
                  className="carDescr__img image"
                  style={{ backgroundImage: `url(../img/cars/${arrImages[slide]})` }}
                ></div>
                <div
                  className="carDescr__img next image"
                  style={{ backgroundImage: `url(../img/cars/${arrImages[items[1]]})` }}
                ></div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
