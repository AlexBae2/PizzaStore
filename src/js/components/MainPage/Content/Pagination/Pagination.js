import classes from "./Pagination.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../../../redux/Reducers/contentReducer";

const Pagination = () => {
  const dispatch = useDispatch();
  const totalPizzasCount = useSelector(
    (state) => state.mainPage.totalPizzasCount
  );
  const pizzasPerPage = useSelector((state) => state.mainPage.pizzasPerPage);
  const countPages = Math.round(totalPizzasCount / pizzasPerPage);
  const currentPage = useSelector((state) => state.mainPage.currentPage);

  const switchPage = (page) => {
    dispatch(setCurrentPage({ page }));
  };
  const activeButton = (index) => {
    return currentPage === index ? classes.activeButton : null;
  };

  return (
    <div className={classes.paginationWrapper}>
      <div className={classes.pagination}>
        <ul className={classes.paginationList}>
          {[...Array(countPages).keys()].map((item, indexItem) => (
            <li
              className={activeButton(indexItem + 1)}
              onClick={() => switchPage(indexItem + 1)}
              key={item}
            >
              {indexItem + 1}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
