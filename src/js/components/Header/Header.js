import Basket from "./Basket/Basket";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__logo">
          <NavLink to={"/"}>
            <div>
              <h1>New Pizza</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </NavLink>
        </div>
        <Basket />
      </div>
    </div>
  );
};

export default Header;
