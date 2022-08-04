import { useDispatch, useSelector } from "react-redux";
import PlusSvg from "../../../../../Utility/PlusSvg";
import { useState } from "react";
import cartSlicer, {
  addItem,
} from "../../../../../redux/Reducers/headerReducer";

const Item = ({ index, urlImg, title, price, sizes, doughs }) => {
  const dispatch = useDispatch();

  const countPizzasInState = useSelector(
    (state) => state.cartSlicer.item
  ).filter((u) => u.id === index).length;
  const [activeDough, setActiveDough] = useState(doughs[0]);
  const [activeSize, setActiveSize] = useState(sizes[0]);
  const [countPizzas, setCountPizzas] = useState(countPizzasInState);

  const addPizzaInBasket = () => {
    const pizza = {
      id: index,
      urlImg,
      title,
      price,
      dough: activeDough,
      size: activeSize,
    };
    dispatch(addItem(pizza));
  };

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={urlImg} alt="Pizza" />
      <h4 className="pizza-block__title">{title}</h4>
      <div className="pizza-block__selector">
        <ul>
          {doughs.map((dough) => (
            <li
              key={dough}
              onClick={() => setActiveDough(dough)}
              className={activeDough === dough ? "active" : null}
            >
              {dough}
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((size) => (
            <li
              key={size}
              onClick={() => setActiveSize(size)}
              className={activeSize === size ? "active" : null}
            >
              {size}
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">{`От ${price}р`}</div>
        <div className="button button--outline button--add">
          <PlusSvg />
          <span
            onClick={() => {
              addPizzaInBasket();
              setCountPizzas(countPizzas + 1);
            }}
          >
            Добавить
          </span>
          <i>{countPizzas}</i>
        </div>
      </div>
    </div>
  );
};

export default Item;
