import Sort from "./Sort/Sort";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setActiveCategory} from "../../../../redux/contentReducer";

const CategoriesItems = () => {
    const categories = ["Все","Мясная","Вегетарианская","Гриль","Острая","Закрытая","Открытая"]
    const dispatch = useDispatch()
    const filterCategory = useSelector((state) => state.main.filterCategory)
    return (
        <div className="content__top">
            <div className="categories">
                <ul>
                    {categories.map((category, categoryId) =>
                        <li className={category===filterCategory ? 'active' : null} onClick={() => dispatch(setActiveCategory({category}))}>{category}</li>)}
                </ul>
            </div>
            <Sort/>
        </div>
    )
};

export default CategoriesItems;