import { useEffect, useRef, useState } from "react";
import {
  setCurrentPage,
  setSort,
} from "../../../../../redux/Reducers/contentReducer";
import { useDispatch, useSelector } from "react-redux";

const Sort = () => {
  const allSort = [
    {
      name: "популярности",
      sort: "popularity",
    },
    {
      name: "цене",
      sort: "price",
    },
    {
      name: "алфавиту",
      sort: "alphabet",
    },
  ];
  const dispatch = useDispatch();
  const activeSort = useSelector((state) => state.mainPage.sortBy);
  const setActiveSort = (sort) => {
    dispatch(setCurrentPage({ page: 1 }));
    dispatch(setSort({ sort }));
  };

  const [isShopPop, setIsShopPop] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isShopPop && ref.current && !ref.current.contains(e.target)) {
        setIsShopPop(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isShopPop]);
  return (
    <div ref={ref} className="sort">
      <div className="sort__label">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={() => setIsShopPop(true)}>{activeSort.name}</span>
      </div>
      <div
        style={isShopPop === true ? { display: "block" } : { display: "none" }}
        className="sort__popup"
      >
        <ul>
          {allSort.map((item, indexItem) => (
            <li
              onClick={() => {
                setActiveSort({ name: item.name, sort: item.sort });
                setIsShopPop(false);
              }}
              className={activeSort.name === item.name ? "active" : null}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sort;
