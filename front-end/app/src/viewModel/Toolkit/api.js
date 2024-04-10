import React from "react";
import {
  Provider as ReduxProvider,
  useDispatch,
  useSelector,
} from "react-redux";

import {
  ItemsInShop,
  addItemsInShoppingCart,
  clearShoppingCart,
  exitClearBasket,
  historyOrder,
  newOrder,
  removeItemsInShoppingCart,
  setDateTime,
  updateResult,
} from "./impl/slice/basket";

import {
  clearDataAfterAuthentication,
  clearDataAfterRegistration,
  exitClearUser,
  getPersonsInfo,
  getPersonsLogin,
  getTokenAuthentication,
  getTokenRegistration,
  setFirstName,
  setLastName,
  setNewLogin,
  setNewPassword,
  setPassword2,
  setRegistration,
  setUser,
} from "./impl/slice/user";

import store from "./impl/store";

const buildProvider = () => {
  return (props) => {
    return <ReduxProvider store={store}>{props.children}</ReduxProvider>;
  };
};

// ---------------------------------
// Action Dispatch

const useActionSetNewLogin = () => {
  const dispatch = useDispatch();
  return (value) => dispatch(setNewLogin(value));
};

const useActionSetNewPassword = () => {
  const dispatch = useDispatch();
  return (value) => dispatch(setNewPassword(value));
};

const useActionSetNewPassword2 = () => {
  const dispatch = useDispatch();
  return (value) => dispatch(setPassword2(value));
};

const useActionSetFirstName = () => {
  const dispatch = useDispatch();
  return (value) => dispatch(setFirstName(value));
};

const useActionSetLastName = () => {
  const dispatch = useDispatch();
  return (value) => dispatch(setLastName(value));
};

const useActionsetRegistration = () => {
  const dispatch = useDispatch();
  return (value) => dispatch(setRegistration(value));
};

const useActionsetUser = () => {
  const dispatch = useDispatch();
  return (value) => dispatch(setUser(value));
};

const useActionClearDataAfterAuthentication = () => {
  const dispatch = useDispatch();
  return () => dispatch(clearDataAfterAuthentication());
};

const useActionClearDataAfterRegistration = () => {
  const dispatch = useDispatch();
  return () => dispatch(clearDataAfterRegistration());
};

const useActionExit = () => {
  const dispatch = useDispatch();
  return () => dispatch(exitClearBasket());
};

const useExitClearUser = () => {
  const dispatch = useDispatch();
  return () => dispatch(exitClearUser());
};

const useActionAddItemsInShoppingCart = () => {
  const dispatch = useDispatch();
  return (value) => dispatch(addItemsInShoppingCart(value));
};

const useActionRemoveItemsInShoppingCart = () => {
  const dispatch = useDispatch();
  return (value) => dispatch(removeItemsInShoppingCart(value));
};

const useActionClearAllItemsInBasket = () => {
  const dispatch = useDispatch();
  return () => dispatch(clearShoppingCart());
};

const useActionSetDateTime = () => {
  const dispatch = useDispatch();
  return (value) => dispatch(setDateTime(value));
};
// *********************************

// Listeners slice basket
const useGetItemsListener = () => {
  return useSelector((state) => state.basket.items);
};

const useGetResultListener = () => {
  return useSelector((state) => state.basket.result);
};

const useGetShoppingCartListener = () => {
  return useSelector((state) => state.basket.shoppingCart);
};

const useGetHistoryOrderListener = () => {
  return useSelector((state) => state.basket.history);
};

const useGetDateTimeListener = () => {
  return useSelector((state) => state.basket.dateTime);
};
// Listeners slice User

const useGetLoginListener = () => {
  return useSelector((state) => state.user.login);
};

const useGetPasswordListener = () => {
  return useSelector((state) => state.user.password);
};

const useGetPassword2Listener = () => {
  return useSelector((state) => state.user.password2);
};

const useGetLastNameListener = () => {
  return useSelector((state) => state.user.lastName);
};

const useGetFirstNameListener = () => {
  return useSelector((state) => state.user.firstName);
};

const useGetUserListener = () => {
  return useSelector((state) => state.user.user);
};

const useGetRegistrationListener = () => {
  return useSelector((state) => state.user.registration);
};

const usePersonsListener = () => {
  return useSelector((state) => state.user.persons);
};

const useGetTokenListener = () => {
  return useSelector((state) => state.user.token);
};

const useGetPersonsInfoListener = () => {
  return useSelector((state) => state.user.info);
};
// ***********************************
// Async

const useAuthenticationDispatch = () => {
  const dispatch = useDispatch();

  const login = useSelector((state) => state.user.login);
  const password = useSelector((state) => state.user.password);
  return () => dispatch(getTokenAuthentication({ login, password }));
};

const usePersonsLoginDispatch = () => {
  const dispatch = useDispatch();
  return () => dispatch(getPersonsLogin());
};

const useGetTokenRegistrationDispatch = () => {
  const dispatch = useDispatch();
  const login = useGetLoginListener();
  const password = useGetPasswordListener();
  const firstName = useSelector((state) => state.user.firstName);
  const lastName = useSelector((state) => state.user.lastName);
  
  return () =>
    dispatch(getTokenRegistration({login, password, firstName, lastName}));
};

const useItemDispatch = () => {
  const dispatch = useDispatch();
  return () => dispatch(ItemsInShop());
};

const useGetResultDispatch = () => {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.basket.result);
  return (price, symbol) => dispatch(updateResult({ price, result, symbol }));
};

const useSendNewOrderDispatch = () => {
  const dispatch = useDispatch();
  const login = useGetUserListener();
  const ItemInBasket = useSelector((state) => state.basket.shoppingCart);
  const flowers = ItemInBasket.map((item) => item.flowerID).join(",");
  const cost = useGetResultListener();
  const date = useSelector((state) => state.basket.dateTime);
  return () => dispatch(newOrder({ login, flowers, cost, date }));
};

const useGetHistoryOrderDispatch = () => {
  const dispatch = useDispatch();
  const login = useGetUserListener();
  return () => dispatch(historyOrder({ login }));
};

const useGetPersonsInfo = () => {
  const dispatch = useDispatch();
  const login = useGetUserListener();
  return () => dispatch(getPersonsInfo({ login }));
};
// // -----------------------------------------------

export {
  buildProvider,
  // Action
  useActionAddItemsInShoppingCart,
  useActionClearAllItemsInBasket,
  useActionClearDataAfterAuthentication,
  useActionClearDataAfterRegistration,
  useActionExit,
  useActionRemoveItemsInShoppingCart,
  useActionSetDateTime,
  useActionSetFirstName,
  useActionSetLastName,
  useActionSetNewLogin,
  useActionSetNewPassword,
  useActionSetNewPassword2,
  useActionsetRegistration,
  useActionsetUser,
  useAuthenticationDispatch,
  useExitClearUser,
  useGetDateTimeListener,
  useGetFirstNameListener,
  useGetHistoryOrderDispatch,
  useGetHistoryOrderListener,
  useGetItemsListener,
  useGetLastNameListener,
  useGetLoginListener,
  useGetPassword2Listener,
  useGetPasswordListener,
  // -----------
  useGetPersonsInfo,
  useGetPersonsInfoListener,
  useGetRegistrationListener,
  useGetResultDispatch,
  useGetResultListener,
  useGetShoppingCartListener,
  useGetTokenListener,
  useGetTokenRegistrationDispatch,
  useGetUserListener,
  useItemDispatch,
  usePersonsListener,
  usePersonsLoginDispatch,
  useSendNewOrderDispatch,
};
