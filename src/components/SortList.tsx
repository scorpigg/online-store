import React from 'react';

const SortList = () => {
  return (
    <select defaultValue={'default'}>
      <option value="default" disabled hidden>
        Sort by...
      </option>
      <option value="price-asc">Sort by price ASC</option>
      <option value="price-desc">Sort by price DESC</option>
      <option value="rating-asc">Sort by rating ASC</option>
      <option value="rating-desc">Sort by rating DESC</option>
    </select>
  );
};

export default SortList;

// useful links to understand
// https://www.simplilearn.com/tutorials/reactjs-tutorial/how-to-create-functional-react-dropdown-menu
// https://devblog.xero.com/typescript-and-react-whats-react-component-p-s-mean-cfddc65f81e1
// https://reactjs.org/docs/forms.html
