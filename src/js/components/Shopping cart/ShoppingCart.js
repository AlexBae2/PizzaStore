import { useSelector } from "react-redux";
import EmptyBasket from "./EmpetyBasket/EmptyBasket";
import FilledBasket from "./FilledBasket/FilledBasket";

const ShoppingCart = () => {
  const pizzas = useSelector((state) => state.mainPage.pizzas);
  return (
    <>
      <FilledBasket />
    </>
  );
};
export default ShoppingCart;
