import './css/main.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from "./js/components/MainPage/MainPage";
import { Provider } from 'react-redux'
import {store} from "./js/redux/store";
import ShoppingCart from "./js/components/Shopping cart/ShoppingCart";

function App() {
  return (
      <Provider store={store}>
          <BrowserRouter>
          <Routes>
              <Route path="/" element={<MainPage/>}/>
              <Route path="/Basket" element={<ShoppingCart/>}/>
          </Routes>
          </BrowserRouter>
      </Provider>
  );
}

export default App;
