import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import {
//   useActionUPDATE_LOGIN,
//   useActionUPDATE_RESULT,
//   useActionUPDATE_TOKEN,
//   useActionUPDATE_USERS,
//   useClearAllItemsInBasket,
//   useGetUserListener,
//   useResultListener,
// } from "../../viewModel/redux/api";

import {
  useActionExit,
  useExitClearUser,
  useGetResultListener,
  useGetUserListener,
} from "../../viewModel/Toolkit/api";

const Navbar = () => {
  const userLogin = useGetUserListener();
  const ClearShoppingCart = useActionExit();
  const clearUser = useExitClearUser();
  const cost = useGetResultListener();

  const navigate = useNavigate();

  const handlerExit = () => {
    ClearShoppingCart();
    clearUser();
    navigate("/Products");
  };

  if (userLogin === "") {
    return (
      <div>
        <li>
          <Link to="/Products">Главная</Link>
        </li>
        <li>
          <Link to="/Login">Войти</Link>
        </li>
        {/* <li>
          <Link onClick={handler}>Корзина</Link>
        </li> */}
      </div>
    );
  } else {
    return (
      <div>
        <li>
          <Link to="/Products">Главная</Link>
        </li>
        <li>
          <label>
            <Link to="/ShoppingCart">Корзина</Link> ({cost} ₽)
          </label>
        </li>
        <li>
          <Link to="/Profile">Профиль</Link>
        </li>
        <li>
          <Link onClick={handlerExit}>Выйти</Link>
        </li>
        <span>Привет, {userLogin}!</span>
      </div>
    );
  }
};

export default Navbar;
