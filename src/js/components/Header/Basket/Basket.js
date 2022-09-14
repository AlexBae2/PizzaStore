import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import BasketSvg from "../../../Utility/SVG/BasketSvg";

const Basket = () => {
  let countPizzas = 0;
  let sumPizzas = 0;
  const priceAndCount = useSelector((state) => state.cartSlicer.item)
    .map((u) => {
      return { price: u.price, count: u.count };
    })
    .forEach((element, key) => {
      sumPizzas += element.price * element.count;
      countPizzas += element.count;
    });
  return (
    <div className="header__cart">
      <NavLink to={"/Basket"} className="button button--cart">
        <span>{sumPizzas} Р</span>
        <div className="button__delimiter"></div>
        <BasketSvg />
        <span>{countPizzas}</span>
      </NavLink>
    </div>
  );
};

export default Basket;
