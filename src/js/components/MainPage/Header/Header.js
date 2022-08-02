import {NavLink} from "react-router-dom";
import Basket from "./Basket/Basket";

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="header__logo">
                    <div>
                        <h1>New Pizza</h1>
                        <p>самая вкусная пицца во вселенной</p>
                    </div>
                </div>
                <Basket/>
            </div>
        </div>
    )
};

export default Header;