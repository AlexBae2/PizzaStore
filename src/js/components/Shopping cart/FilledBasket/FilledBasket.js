import classes from "./FilledBasket.module.css";
import { NavLink } from "react-router-dom";
import Basket from "../../Header/Basket/Basket";
import BasketSvg from "../../../Utility/BasketSvg";
import TrashcanSvg from "../../../Utility/TrashcanSvg";
import MinusSvg from "../../../Utility/MinusSvg";
import PlusSvg from "../../../Utility/PlusSvg";
import CrossSvg from "../../../Utility/CrossSvg";
import BackButtonSvg from "../../../Utility/BackButtonSvg";

const FilledBasket = () => {
  return (
    <div className={classes.container}>
      <div className="cart">
        <div className="cart__top">
          <h2 className="content__title">
            <BasketSvg />
            Корзина
          </h2>
          <div className="cart__clear">
            <TrashcanSvg />
            <span>Очистить корзину</span>
          </div>
        </div>
        <div className={classes.items}>
          <div className="cart__item">
            <div className="cart__item-img">
              <img
                className="pizza-block__image"
                src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                alt="Pizza"
              />
            </div>
            <div className="cart__item-info">
              <h3>Сырный цыпленок</h3>
              <p>тонкое тесто, 26 см.</p>
            </div>
            <div className="cart__item-count">
              <div className="button button--outline button--circle cart__item-count-minus">
                <MinusSvg />
              </div>
              <b>2</b>
              <div className="button button--outline button--circle cart__item-count-plus">
                <PlusSvg />
              </div>
            </div>
            <div className="cart__item-price">
              <b>770 ₽</b>
            </div>
            <div className="cart__item-remove">
              <div className="button button--outline button--circle">
                <CrossSvg />
              </div>
            </div>
          </div>
          <div className="cart__item">
            <div className="cart__item-img">
              <img
                className="pizza-block__image"
                src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                alt="Pizza"
              />
            </div>
            <div className="cart__item-info">
              <h3>Сырный цыпленок</h3>
              <p>тонкое тесто, 26 см.</p>
            </div>
            <div className="cart__item-count">
              <div className="button button--outline button--circle cart__item-count-minus">
                <MinusSvg />
              </div>
              <b>2</b>
              <div className="button button--outline button--circle cart__item-count-plus">
                <PlusSvg />
              </div>
            </div>
            <div className="cart__item-price">
              <b>770 ₽</b>
            </div>
            <div className="cart__item-remove">
              <div className="button button--outline button--circle">
                <CrossSvg />
              </div>
            </div>
          </div>
          <div className="cart__item">
            <div className="cart__item-img">
              <img
                className="pizza-block__image"
                src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                alt="Pizza"
              />
            </div>
            <div className="cart__item-info">
              <h3>Сырный цыпленок</h3>
              <p>тонкое тесто, 26 см.</p>
            </div>
            <div className="cart__item-count">
              <div className="button button--outline button--circle cart__item-count-minus">
                <MinusSvg />
              </div>
              <b>2</b>
              <div className="button button--outline button--circle cart__item-count-plus">
                <PlusSvg />
              </div>
            </div>
            <div className="cart__item-price">
              <b>770 ₽</b>
            </div>
            <div className="cart__item-remove">
              <div className="button button--outline button--circle">
                <CrossSvg />
              </div>
            </div>
          </div>
          <div className="cart__item">
            <div className="cart__item-img">
              <img
                className="pizza-block__image"
                src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                alt="Pizza"
              />
            </div>
            <div className="cart__item-info">
              <h3>Сырный цыпленок</h3>
              <p>тонкое тесто, 26 см.</p>
            </div>
            <div className="cart__item-count">
              <div className="button button--outline button--circle cart__item-count-minus">
                <MinusSvg />
              </div>
              <b>2</b>
              <div className="button button--outline button--circle cart__item-count-plus">
                <PlusSvg />
              </div>
            </div>
            <div className="cart__item-price">
              <b>770 ₽</b>
            </div>
            <div className="cart__item-remove">
              <div className="button button--outline button--circle">
                <CrossSvg />
              </div>
            </div>
          </div>
        </div>
        <div className="cart__bottom">
          <div className="cart__bottom-details">
            <span>
              {" "}
              Всего пицц: <b>3 шт.</b>{" "}
            </span>
            <span>
              {" "}
              Сумма заказа: <b>900 ₽</b>{" "}
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
