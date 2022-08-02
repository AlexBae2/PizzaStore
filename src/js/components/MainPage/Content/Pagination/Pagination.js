import classes from "./Pagination.module.css";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentPage} from "../../../../redux/contentReducer";

const Pagination = () => {
    const dispatch = useDispatch();
    const totalPizzasCount = useSelector((state) => state.main.totalPizzasCount);
    const switchPage = (page) => {
        dispatch(setCurrentPage({page}));
    }

    return (
        <div className={classes.paginationWrapper}>
            <div className={classes.pagination}>
                <ul className={classes.paginationList}>
                    {[...Array(totalPizzasCount).keys()].map((item, indexItem) => <li onClick={() => switchPage(indexItem+1)} key={item}>{indexItem + 1}</li>)}
                </ul>
            </div>
        </div>
    )
};

export default Pagination;