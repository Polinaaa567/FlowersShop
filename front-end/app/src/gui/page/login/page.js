import React from "react";
import { useNavigate } from "react-router-dom";
// import {
//   useActionUPDATE_LOGIN,
//   useActionUPDATE_PASSWORD,
//   useActionUPDATE_USERS,
//   useGetLoginListener,
//   useLoginDispatcher,
//   useTokenListener,
// } from "../../../viewModel/redux/api.js";

import {
  useActionClearDataAfterAuthentication,
  useActionSetNewLogin,
  useActionSetNewPassword,
  useActionsetUser,
  useAuthenticationDispatch,
  useGetLoginListener,
  useGetTokenListener,
} from "../../../viewModel/Toolkit/api.js";

const Button = () => {
  const setUserName = useActionsetUser();
  const clearDataAfterAuthentication = useActionClearDataAfterAuthentication();
  const loginListenerFromUser = useGetLoginListener();

  const dispatchFromToken = useAuthenticationDispatch();
  dispatchFromToken();

  const navigate = useNavigate();
  const TokenData = useGetTokenListener();
  const buttonHandlerClick = async () => {
    if (TokenData != "BAD") {
      navigate("/Products");
      clearDataAfterAuthentication();
      setUserName(loginListenerFromUser);
    } else {
      alert("User not found");
    }
  };

  return (
    <>
      <div className="form-group form-button">
        <input
          type="submit"
          name="signup"
          id="signin"
          className="form-submit"
          value="Войти"
          onClick={buttonHandlerClick}
        ></input>
      </div>
    </>
  );
};

const BeautifulDetails = () => {
  return (
    <>
      <figure>
        <img
          src="./images/signin-image.png"
          alt="Sign-in image"
          className="shop-image"
        ></img>
      </figure>
      <a href="/Registration" className="link">
        Зарегистрироваться
      </a>
    </>
  );
};

const Input = () => {
  const actionsLogin = useActionSetNewLogin();
  const actionsPassword = useActionSetNewPassword();
  const handle = async (event) => {
    actionsLogin(event.target.value);
  };
  const update = async (event) => {
    actionsPassword(event.target.value);
  };
  return (
    <>
      <div className="form-group">
        <label className="label" htmlFor="loginInput">
          <i className="zmdi zmdi-account material-icons-name">👤 </i>
        </label>
        <input
          type="text"
          id="loginInput"
          onChange={handle}
          placeholder="Логин"
          wfd-id="id0"
        />
      </div>

      <div className="form-group">
        <label className="label" htmlFor="passwordInput">
          <i className="zmdi zmdi-lock">🔒 </i>
        </label>
        <input
          type="password"
          id="passwordInput"
          onChange={update}
          placeholder="Пароль"
          wfd-id="id1"
        />
      </div>
    </>
  );
};

const PageLogin = () => {
  return (
    <div className="signin-content">
      <div className="signup-form">
        <h2 className="form-title">Вход</h2>

        <Input />
        <br />
        <br />
        <Button />
      </div>
      <div className="signup-image">
        <BeautifulDetails />
      </div>
    </div>
  );
};

export default PageLogin;
