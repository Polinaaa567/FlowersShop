import React from "react";
import { useNavigate } from "react-router-dom";
import {
  useActionClearDataAfterRegistration,
  useActionSetFirstName,
  useActionSetLastName,
  useActionSetNewLogin,
  useActionSetNewPassword,
  useActionSetNewPassword2,
  useActionsetRegistration,
  useActionsetUser,
  useGetFirstNameListener,
  useGetLastNameListener,
  useGetLoginListener,
  useGetPassword2Listener,
  useGetPasswordListener,
  useGetRegistrationListener,
  useGetTokenRegistrationDispatch,
  usePersonsListener,
  usePersonsLoginDispatch,
} from "../../../viewModel/Toolkit/api";
import "./Style.css";

const Button = () => {
  const navigate = useNavigate();
  const passwd = useGetPasswordListener();
  const password2 = useGetPasswordListener();
  const dispatchTokenReg = useGetTokenRegistrationDispatch();
  const data = useGetRegistrationListener();
  const login = useGetLoginListener();
  const actionsUsers = useActionsetUser();
  const clearInformation = useActionClearDataAfterRegistration();
  const firstName = useGetFirstNameListener();
  const lastName = useGetLastNameListener();
  const hundlerButton = () => {
    if (passwd !== password2) {
      alert("Пароли не совпадают");
    } else if (passwd.length < 7) {
      alert("Пароль слишком короткий");
    } else if (passwd.includes("qwerty") || passwd.includes("123")) {
      alert("Пароль ненадёжный");
    } else if (firstName === "" && lastName === "") {
      alert("Незаполнено поле фамилии/имя");
    } else if (login === "") {
      alert("Незаполнено поле Логина");
    } else {
      if (data) {
        actionsUsers(login);
        clearInformation();
        dispatchTokenReg();
        navigate("/Products");
      } else {
        alert("Пользователь с таким логином уже найден");
      }
    }
  };

  return (
    <>
      <div className="form-group form-button">
        <input
          type="submit"
          name="signup"
          id="signup"
          className="form-submit"
          value="Зарегистрироваться"
          onClick={hundlerButton}
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
          src="./images/signup-image.jpg"
          alt="Sign-up image"
          className="shop-image"
        ></img>
      </figure>
      <a href="/Login" className="link">
        Я уже есть в базе
      </a>
    </>
  );
};

const LabelCheckPersons = () => {
  const data = usePersonsListener();
  const loginInput = useGetLoginListener();
  const isLoginExists = data.find((item) => item === loginInput);
  const actionsReg = useActionsetRegistration();
  if (loginInput === ""){
    actionsReg(false);
    return <span className="label2">Нет данных</span>; 
  }
  if (isLoginExists) {
      actionsReg(false);
      return <span className="label2">Логин уже существует</span>;
  } else {
    actionsReg(true);
    return (
      <>
        <span className="label2">Сойдёт</span>
      </>
    );
  }
};

const LabelCheckPassword = () => {
  const passwd = useGetPasswordListener();
  const password2 = useGetPassword2Listener();
  if(passwd === '') {
        <span className="label2">Нет данных</span>
  }
  if (passwd === password2) {
    return (
        <span className="label2">Сойдёт</span>
    );
  } else {
    return (
        <span className="label2">Пароли не совпадают</span>
    );
  }
};

const Input = () => {
  const actionsFirstName = useActionSetFirstName();
  const actionsLastName = useActionSetLastName();
  const actionsLogin = useActionSetNewLogin();
  const actionsPassword = useActionSetNewPassword();
  const actionsPassword2 = useActionSetNewPassword2();
  const updateLastName = async (event) => {
    actionsLastName(event.target.value);
  };
  const updateFirstName = async (event) => {
    actionsFirstName(event.target.value);
  };
  const updateLogin = async (event) => {
    actionsLogin(event.target.value);
  };
  const updatePasswd = async (event) => {
    actionsPassword(event.target.value);
  };
  const updatePasswd2 = async (event) => {
    actionsPassword2(event.target.value);
  };

  return (
    <>
      <div className="form-group">
        <label className="label" htmlFor="lastName">
          <i className="zmdi zmdi-account material-icons-name">👤 </i>
        </label>
        <input
          type="text"
          id="lastName"
          onChange={updateLastName}
          placeholder="Ваша фамилия"
          wfd-id="id0"
        />
      </div>

      <div className="form-group">
        <label className="label" htmlFor="firstName">
          <i className="zmdi zmdi-account material-icons-name">👤 </i>
        </label>
        <input
          type="text"
          id="firstName"
          onChange={updateFirstName}
          placeholder="Ваше имя"
          wfd-id="id1"
        />
      </div>

      <div className="form-group">
        <label className="label" htmlFor="loginInput">
          <i className="zmdi zmdi-account material-icons-name">👤 </i>
        </label>
        <input
          type="text"
          id="loginInput"
          placeholder="Ваш логин"
          onChange={updateLogin}
          wfd-id="id2"
        />
        <LabelCheckPersons />
      </div>

      <div className="form-group">
        <label className="label" htmlFor="passwordInput">
          <i className="zmdi zmdi-lock">🔒 </i>
        </label>
        <input
          type="password"
          id="passwordInput"
          onChange={updatePasswd}
          placeholder="Пароль"
          wfd-id="id3"
        />
      </div>

      <div className="form-group">
        <label className="label" htmlFor="PovtorpasswordInput">
          <i className="zmdi zmdi-lock-outline">🔐 </i>
        </label>

        <input
          type="password"
          id="PovtorpasswordInput"
          onChange={updatePasswd2}
          placeholder="Повторите пароль"
          wfd-id="id4"
        />
        <LabelCheckPassword />
      </div>
    </>
  );
};

const PageRegistration = () => {
  const dispatch = usePersonsLoginDispatch();
  dispatch();
  return (
    <>
      <div className="signup-content"></div>
      <div className="signup-form">
        <h2 className="form-title">Регистрация</h2>
        <form className="register-form">
          <Input />
          <Button />
        </form>
      </div>
      <div className="signup-image">
        <BeautifulDetails />
      </div>
    </>
  );
};

export default PageRegistration;
