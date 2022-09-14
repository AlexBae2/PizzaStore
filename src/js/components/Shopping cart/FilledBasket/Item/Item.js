import MinusSvg from "../../../../Utility/SVG/MinusSvg";
import PlusSvg from "../../../../Utility/SVG/PlusSvg";
import CrossSvg from "../../../../Utility/SVG/CrossSvg";
import { useDispatch } from "react-redux";
import { removeItem } from "../../../../redux/Reducers/headerReducer";

const Item = ({ id, count, size, urlImg, dough, price, title }) => {
  const dispatch = useDispatch();

  const removePizza = () => {
    dispatch(removeItem({ id, dough, size }));
  };

  return (
    <div className="cart__item">
      <div className="cart__item-img">
        <img className="pizza-block__image" src={urlImg} alt="Pizza" />
      </div>
      <div className="cart__item-info">
        <h3>{title}</h3>
        <p>
          {dough}, {size}.
        </p>
      </div>
      <div className="cart__item-count">
        <div className="button button--outline button--circle cart__item-count-minus">
          <MinusSvg />
        </div>
        <b>{count}</b>
        <div className="button button--outline button--circle cart__item-count-plus">
          <PlusSvg />
        </div>
      </div>
      <div className="cart__item-price">
        <b>{price}₽</b>
      </div>
      <div className="cart__item-remove">
        <div
          onClick={() => removePizza()}
          className="button button--outline button--circle"
        >
          <CrossSvg />
        </div>
      </div>
    </div>
  );
};

export default Item;
