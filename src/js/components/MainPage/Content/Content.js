import Items from "./Items/Items";
import CategoriesItems from "./CategoriesItems/CategoriesItems";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {setPizzas, setTotalPizzasCount} from "../../../redux/contentReducer";
import userApi from "../../../api/api";
import Pagination from "./Pagination/Pagination";

const Content = () => {
    const dispatch = useDispatch();
    const currentPage = useSelector((state) => state.main.currentPage);
    const sortBy = useSelector((state) => state.main.sortBy);
    useEffect(() => {
        userApi.sortByRating(currentPage).then(response => {
            const pizzas = response.data
            debugger
            dispatch(setPizzas({pizzas}))
        })
    })
    return (
        <div className="content">
            <div className="container">
                <CategoriesItems/>
                <h2 className="content__title">Все пиццы</h2>
                <Items/>
                <Pagination/>
            </div>
        </div>
    )
};

export default Content;