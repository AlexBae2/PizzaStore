import classes from "./FilledBasket.module.css";
import { NavLink } from "react-router-dom";
import BasketSvg from "../../../Utility/SVG/BasketSvg";
import TrashcanSvg from "../../../Utility/SVG/TrashcanSvg";
import BackButtonSvg from "../../../Utility/SVG/BackButtonSvg";
import Item from "./Item/Item";
import { useDispatch, useSelector } from "react-redux";
import { clearItems } from "../../../redux/Reducers/headerReducer";

const FilledBasket = () => {
  const selectedPizzas = useSelector((state) => state.cartSlicer.item);
  const dispatch = useDispatch();
  let countAllPizzas = 0;
  let priceAllPizzas = 0;
  selectedPizzas.map((u) => {
    countAllPizzas += u.count;
    priceAllPizzas += u.price * u.count;
  });

  return (
    <div className={classes.container}>
      <div className="cart">
        <div className="cart__top">
          <h2 className="content__title">
            <BasketSvg />
            Корзина
          </h2>
          <div onClick={() => dispatch(clearItems())} className="cart__clear">
            <TrashcanSvg />
            <span>Очистить корзину</span>
          </div>
        </div>
        <div className={classes.items}>
          {selectedPizzas.map((u) => (
            <Item
              id={u.id}
              count={u.count}
              size={u.size}
              dough={u.dough}
              price={u.price}
              title={u.title}
              urlImg={u.urlImg}
            />
          ))}
        </div>

        <div className="cart__bottom">
          <div className="cart__bottom-details">
            <span>
              {" "}
              Всего пицц: <b>{countAllPizzas} шт.</b>{" "}
            </span>
            <span>
              {" "}
              Сумма заказа: <b>{priceAllPizzas} ₽</b>{" "}
            </span>
          </div>
          <div className="cart__bottom-buttons">
            <NavLink
              to={"/"}
              className="button button--outline button--add go-back-btn"
            >
              <BackButtonSvg />
              <span>Вернуться назад</span>
            </NavLink>
            <div className="button pay-btn">
              <span>Оплатить сейчас</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilledBasket;
