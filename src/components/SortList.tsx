import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const SortList = () => {
  const sortList = [
    'Sort by default',
    'Sort by price ASC',
    'Sort by price DESC',
    'Sort by rating ASC',
    'Sort by rating DESC',
  ];
  const [isVisible, setVisible] = useState(false);
  const [selected, setSelected] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickListItem = (i: number) => {
    if (i > 0) {
      searchParams.set('sort', JSON.stringify(i));
    } else {
      searchParams.delete('sort');
    }
    setSearchParams(searchParams);
  };

  useEffect(() => {
    const getSort = searchParams.get('sort');
    let getSortNum = 0;
    if (getSort !== null) {
      getSortNum = Number(JSON.parse(getSort));
    }

    setSelected(getSortNum);
    setVisible(false);
  }, [searchParams]);

  return (
    <div className="sort">
      <div className="sort__label" onClick={() => setVisible(!isVisible)}>
        {sortList[selected]}
      </div>
      {isVisible && (
        <div className="sort__popup">
          <ul>
            {sortList.map((name, i) => {
              return (
                <li key={i} onClick={() => onClickListItem(i)} className={selected === i ? 'active' : ''}>
                  {name}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SortList;
