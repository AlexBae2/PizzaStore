import classes from "./EmptyBasket.module.css";
import smile from "../../../../img/smileFace.png";
import ManSvg from "../../../Utility/SVG/ManSvg";

const EmptyBasket = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.title}>
        <div className={classes.text}>Корзина пустая</div>
        <div className={classes.smile}>
          <img src={smile} />
        </div>
      </div>
      <div className={classes.subTitle}>
        Вероятней всего, вы не заказывали ещё пиццу.
        <br />
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </div>
      <div className={classes.img}>
        <ManSvg />
      </div>
      <div className={classes.button}>
        <button>Вернуться назад</button>
      </div>
    </div>
  );
};

export default EmptyBasket;
