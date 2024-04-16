import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  useActionExit,
  useExitClearUser,
  useGetResultListener,
  useGetTokenListener,
  useGetUserListener,
} from "../../viewModel/Toolkit/api";
import { useEffect } from "react";
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
      <div className="navigate">
        <li>
          <a href="/">
            <img width="100px" src="./images/icon3.png"></img>
          </a>
        </li>
        <nav className="one">
          <ul>
            <li>
              <a href="/Products">Главная</a>
            </li>
            <li>
              <a href="/Login">Войти</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  } else {
    return (
      <div className="navigate">
        <li>
          <a href="/">
            <img width="100px" src="./images/icon3.png"></img>
          </a>
        </li>
        <nav className="one">
          <ul>
            <li>
              <Link to="/Products">Главная</Link>
            </li>
            <li>
              <label>
                <Link to="/ShoppingCart">Корзина ({cost} ₽)</Link>
              </label>
            </li>
            <li>
              <Link to="/Profile">Профиль</Link>
            </li>
            <li>
              <Link onClick={handlerExit}>Выйти</Link>
            </li>
            <span> Привет, {userLogin}! </span>
          </ul>
        </nav>
      </div>
    );
  }
};

export default Navbar;
