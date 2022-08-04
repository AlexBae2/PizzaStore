import Sort from "./Sort/Sort";
import { useDispatch, useSelector } from "react-redux";
import {
  setActiveCategory,
  setCurrentPage,
} from "../../../../redux/Reducers/contentReducer";

const CategoriesItems = () => {
  const categories = [
    "Все",
    "Мясная",
    "Вегетарианская",
    "Гриль",
    "Острая",
    "Закрытая",
    "Открытая",
  ];
  const dispatch = useDispatch();
  const filterCategory = useSelector((state) => state.mainPage.filterCategory);

  const setCategory = ({ category }) => {
    dispatch(setCurrentPage({ page: 1 }));
    dispatch(setActiveCategory({ category }));
  };

  return (
    <div className="content__top">
      <div className="categories">
        <ul>
          {categories.map((category, categoryId) => (
            <li
              className={category === filterCategory ? "active" : null}
              onClick={() => setCategory({ category })}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
      <Sort />
    </div>
  );
};

export default CategoriesItems;
