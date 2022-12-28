import React from 'react';

export function NotFound() {
  const href = window.location.href;
  let arrHref = href.split('?');
  arrHref = arrHref[0].split('/');
  let hrefText = arrHref[arrHref.length - 1];
  const hrefTextArr = hrefText.split('');
  if (hrefTextArr.length > 9) {
    hrefText = hrefTextArr.splice(0, 7).join('') + '...';
  }

  return (
    <div className="notfound__text">
      <p className="notfound__textPlace">
        Here is no
        <br />
        <span className="notfound__pagePlace">{hrefText}</span>
      </p>
    </div>
  );
}
