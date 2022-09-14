import { useSelector } from "react-redux";
import EmptyBasket from "./EmpetyBasket/EmptyBasket";
import FilledBasket from "./FilledBasket/FilledBasket";
import cartSlicer from "../../redux/Reducers/headerReducer";

const ShoppingCart = () => {
  const countPizzas = useSelector((state) => state.cartSlicer.item).length;
  return <>{countPizzas > 0 ? <FilledBasket /> : <EmptyBasket />}</>;
};
export default ShoppingCart;
