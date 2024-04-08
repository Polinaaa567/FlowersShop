import React from "react";
import {
  Provider as ReduxProvider,
  useDispatch,
  useSelector,
} from "react-redux";
import { ACTIONS_CREATORS } from "./impl/actions.js";

import {
  async_NewOrder,
  async_Registration,
  async_Token,
  async_getPersons,
  async_getResult,
  async_update,
} from "./impl/async.js";
import store from "./impl/store.js";

function buildProvider() {
  return (props) => {
    return <ReduxProvider store={store}>{props.children}</ReduxProvider>;
  };
}

// ---------------------------------
// Action Dispatch

function useActionUPDATE_LOGIN() {
  const dispatch = useDispatch();
  return (value) => dispatch(ACTIONS_CREATORS.UPDATE_LOGIN(value));
}

function useActionUPDATE_PASSWORD() {
  const dispatch = useDispatch();
  return (value) => dispatch(ACTIONS_CREATORS.UPDATE_PASSWORD(value));
}

function useActionUPDATE_PASSWORD2() {
  const dispatch = useDispatch();
  return (value) => dispatch(ACTIONS_CREATORS.UPDATE_PASSWORD2(value));
}

function useActionUPDATE_FIRSTNAME() {
  const dispatch = useDispatch();
  return (value) => dispatch(ACTIONS_CREATORS.UPDATE_FIRSTNAME(value));
}

function useActionUPDATE_LASTNAME() {
  const dispatch = useDispatch();
  return (value) => dispatch(ACTIONS_CREATORS.UPDATE_LASTNAME(value));
}

function useActionREGISTRATION() {
  const dispatch = useDispatch();
  return (value) => dispatch(ACTIONS_CREATORS.REGISTRATION(value));
}

function useActionUPDATE_USERS() {
  const dispatch = useDispatch();
  return (value) => dispatch(ACTIONS_CREATORS.UPDATE_USERS(value));
}

function useActionUPDATE_TOKEN() {
  const dispatch = useDispatch();
  return (value) => dispatch(ACTIONS_CREATORS.UPDATE_TOKEN(value));
}

function useActionADD_BASKET() {
  const dispatch = useDispatch();
  return (value) => dispatch(ACTIONS_CREATORS.ADD_BASKET(value));
}

function useActionREMOVE_ITEMS() {
  const dispatch = useDispatch();
  return (value) => dispatch(ACTIONS_CREATORS.REMOVE_ITEMS(value));
}

function useActionUPDATE_RESULT() {
  const dispatch = useDispatch();
  return (value) => dispatch(ACTIONS_CREATORS.UPDATE_RESULT(value));
}

function useClearAllItemsInBasket() {
  const dispatch = useDispatch();
  return (value) => dispatch(ACTIONS_CREATORS.CLEAR_ALL_ITEMS_IN_BASKET(value));
}
// *********************************

function useDataListener() {
  return useSelector((state) => state.value);
}

function useDataDispatcher() {
  const dispatch = useDispatch();
  return () => dispatch(async_update());
}

// *********************************

function useLoginDispatcher() {
  const dispatch = useDispatch();

  const login = useSelector((state) => state.login);
  const password = useSelector((state) => state.password);
  return () => dispatch(async_Token(login, password));
}

function useTokenListener() {
  return useSelector((state) => state.token);
}

// *********************************

function useRegistrationDispatcher() {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.login);
  const password = useSelector((state) => state.password);
  const firstName = useSelector((state) => state.firstName);
  const lastName = useSelector((state) => state.lastName);
  return () =>
    dispatch(async_Registration(login, password, firstName, lastName));
}

function useRegistrationListener() {
  return useSelector((state) => state.registration);
}

// ************************

function usePersonsDispatcher() {
  const dispatch = useDispatch();
  return () => dispatch(async_getPersons());
}

function usePersonsListener() {
  return useSelector((state) => state.persons);
}

// ******************************

function useGetLoginListener() {
  return useSelector((state) => state.login);
}

function useGetPasswordListener() {
  return useSelector((state) => state.password);
}

function useGetPassword2Listener() {
  return useSelector((state) => state.password2);
}

function useGetLastNameListener() {
  return useSelector((state) => state.lastName);
}

function useGetFirstNameListener() {
  return useSelector((state) => state.firstName);
}

function useGetUserListener() {
  return useSelector((state) => state.user);
}

function useGetBasketItems() {
  return useSelector((state) => state.basket);
}

// -----------------------------------------------

function useGetResultDispatch() {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.result);
  return (price, symbol) => dispatch(async_getResult(price, result, symbol));
}

function useResultListener() {
  return useSelector((state) => state.result);
}

// ------------------------------------------------

function useSendNewOrder() {
  const dispatch = useDispatch();
  const login = useGetUserListener();
  const ItemInBasket = useGetBasketItems();
  const ids = ItemInBasket.map((item) => item.flowerID).join(",");
  const cost = useResultListener();
  return () => dispatch(async_NewOrder(login, ids, cost));
}

export {
  buildProvider,
  // Action
  useActionADD_BASKET,
  useActionREGISTRATION,
  useActionREMOVE_ITEMS,
  useActionUPDATE_FIRSTNAME,
  useActionUPDATE_LASTNAME,
  useActionUPDATE_LOGIN,
  useActionUPDATE_PASSWORD,
  useActionUPDATE_PASSWORD2,
  useActionUPDATE_RESULT,
  useActionUPDATE_TOKEN,
  useActionUPDATE_USERS,
  useClearAllItemsInBasket,

  // -----------
  useDataDispatcher,
  useDataListener,
  useGetBasketItems,
  useGetFirstNameListener,
  useGetLastNameListener,
  useGetLoginListener,
  useGetPassword2Listener,
  useGetPasswordListener,
  useGetResultDispatch,
  useGetUserListener,
  useLoginDispatcher,
  usePersonsDispatcher,
  usePersonsListener,
  useRegistrationDispatcher,
  useRegistrationListener,
  useResultListener,
  useSendNewOrder,
  useTokenListener,
};
