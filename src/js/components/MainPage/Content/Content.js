import Items from "./Items/Items";
import CategoriesItems from "./CategoriesItems/CategoriesItems";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Pagination from "./Pagination/Pagination";
import SortFabric from "../../../Utility/SortFabric";

const Content = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.mainPage.currentPage);
  const sortBy = useSelector((state) => state.mainPage.sortBy);
  const filterCategory = useSelector((state) => state.mainPage.filterCategory);

  useEffect(() => {
    SortFabric.createSort({
      type: sortBy.sort,
      currentPage,
      filterCategory,
      dispatch,
    });
  }, [sortBy, filterCategory, currentPage]);
  return (
    <div className="content">
      <div className="container">
        <CategoriesItems />
        <h2 className="content__title">Все пиццы</h2>
        <Items />
        <Pagination />
      </div>
    </div>
  );
};

export default Content;
