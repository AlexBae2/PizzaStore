import Header from "./Header/Header";
import Content from "./Content/Content";
import userApi from "../../api/api";
import {setTotalPizzasCount} from "../../redux/contentReducer";
import {useDispatch, useSelector} from "react-redux";

const MainPage = () => {
    const dispatch = useDispatch();

    const pizzaPerPage = useSelector((state) => state.main.pizzasPerPage);

    userApi.getCountPage().then(response => {
        const totalPizzasCount = Math.round(response.data.length / pizzaPerPage)
        dispatch(setTotalPizzasCount({totalPizzasCount}))
    })
    return (
        <div className="wrapper">
            <Header/>
            <Content/>
        </div>
    )
};

export default MainPage;