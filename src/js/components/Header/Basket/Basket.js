import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import BasketSvg from "../../../Utility/BasketSvg";

const Basket = () => {
  const countPizzas = useSelector((state) => state.cartSlicer.item).length;
  const costOfPizzas = useSelector((state) => state.cartSlicer.item)
    .map((u) => u.price)
    .reduce((sum, current) => sum + current, 0);
  debugger;
  return (
    <div className="header__cart">
      <NavLink to={"/Basket"} className="button button--cart">
        <span>{costOfPizzas} ₽</span>
        <div className="button__delimiter"></div>
        <BasketSvg />
        <span>{countPizzas}</span>
      </NavLink>
    </div>
  );
};

export default Basket;
