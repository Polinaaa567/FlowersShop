import React from "react";
import {
  Provider as ReduxProvider,
  useDispatch,
  useSelector,
} from "react-redux";
import { ACTIONS_CREATORS } from "./impl/actions.js";

import {
  ItemsInShop,
  getPersonsLogin,
  getTokenAuthentication,
  getTokenRegistration,
  newOrder,
  updateResult,
} from "./impl/async.js";
import store from "./impl/store.js";

const buildProvider = () => {
  return (props) => {
    return <ReduxProvider store={store}>{props.children}</ReduxProvider>;
  };
};

// ---------------------------------
// Action Dispatch

function useActionSetNewLogin() {
  const dispatch = useDispatch();
  return (value) => dispatch(ACTIONS_CREATORS.UPDATE_LOGIN(value));
}

function useActionSetNewPassword() {
  const dispatch = useDispatch();
  return (value) => dispatch(ACTIONS_CREATORS.UPDATE_PASSWORD(value));
}

function useActionSetNewPassword2() {
  const dispatch = useDispatch();
  return (value) => dispatch(ACTIONS_CREATORS.UPDATE_PASSWORD2(value));
}

function useActionSetFirstName() {
  const dispatch = useDispatch();
  return (value) => dispatch(ACTIONS_CREATORS.UPDATE_FIRSTNAME(value));
}

function useActionSetLastName() {
  const dispatch = useDispatch();
  return (value) => dispatch(ACTIONS_CREATORS.UPDATE_LASTNAME(value));
}

function useActionsetRegistration() {
  const dispatch = useDispatch();
  return (value) => dispatch(ACTIONS_CREATORS.REGISTRATION(value));
}

function useActionsetUser() {
  const dispatch = useDispatch();
  return (value) => dispatch(ACTIONS_CREATORS.UPDATE_USERS(value));
}

function useActionAddItemsInShoppingCart() {
  const dispatch = useDispatch();
  return (value) => dispatch(ACTIONS_CREATORS.ADD_BASKET(value));
}

function useActionRemoveItemsInShoppingCart() {
  const dispatch = useDispatch();
  return (value) => dispatch(ACTIONS_CREATORS.REMOVE_ITEMS(value));
}

function useClearAllItemsInBasket() {
  const dispatch = useDispatch();
  return (value) => dispatch(ACTIONS_CREATORS.CLEAR_ALL_ITEMS_IN_BASKET(value));
}
// *********************************

function useGetItemsListener() {
  return useSelector((state) => state.value);
}

function useItemDispatch() {
  const dispatch = useDispatch();
  return () => dispatch(ItemsInShop());
}

// *********************************

function useAuthenticationDispatch() {
  const dispatch = useDispatch();

  const login = useSelector((state) => state.login);
  const password = useSelector((state) => state.password);
  return () => dispatch(getTokenAuthentication(login, password));
}

function useGetTokenListener() {
  return useSelector((state) => state.token);
}

// *********************************

function useGetTokenRegistrationDispatch() {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.login);
  const password = useSelector((state) => state.password);
  const firstName = useSelector((state) => state.firstName);
  const lastName = useSelector((state) => state.lastName);
  return () =>
    dispatch(getTokenRegistration(login, password, firstName, lastName));
}

function useGetRegistrationListener() {
  return useSelector((state) => state.registration);
}

// ************************

function usePersonsLoginDispatch() {
  const dispatch = useDispatch();
  return () => dispatch(getPersonsLogin());
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

function useGetShoppingCartListener() {
  return useSelector((state) => state.basket);
}

// -----------------------------------------------

function useGetResultDispatch() {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.result);
  return (price, symbol) => dispatch(updateResult(price, result, symbol));
}

function useGetResultListener() {
  return useSelector((state) => state.result);
}

// ------------------------------------------------

function useSendNewOrder() {
  const dispatch = useDispatch();
  const login = useGetUserListener();
  const ItemInBasket = useGetShoppingCartListener();
  const ids = ItemInBasket.map((item) => item.flowerID).join(",");
  const cost = useGetResultListener();
  return () => dispatch(newOrder(login, ids, cost));
}

export {
  buildProvider,
  // Action
  useActionAddItemsInShoppingCart,
  useActionRemoveItemsInShoppingCart,
  useActionSetFirstName,
  useActionSetLastName,
  useActionSetNewLogin,
  useActionSetNewPassword,
  useActionSetNewPassword2,
  useActionsetRegistration,
  useActionsetUser,
  useAuthenticationDispatch,
  useClearAllItemsInBasket,
  useGetFirstNameListener,
  useGetItemsListener,
  useGetLastNameListener,
  useGetLoginListener,
  useGetPassword2Listener,
  useGetPasswordListener,
  useGetRegistrationListener,
  useGetResultDispatch,
  useGetResultListener,
  useGetShoppingCartListener,
  useGetTokenListener,
  useGetTokenRegistrationDispatch,
  useGetUserListener,
  // -----------
  useItemDispatch,
  usePersonsListener,
  usePersonsLoginDispatch,
  useSendNewOrder,
};
