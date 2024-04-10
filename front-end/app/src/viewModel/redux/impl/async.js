import { ApiServiceFactory } from "../../../transport/api/ApiServiceFactory";
import { ACTIONS_CREATORS } from "./actions.js";

// Done
function ItemsInShop() {
  console.log("я здесь ItemsInShop");
  return (dispatch) => {
    (async () => {
      const apiService = ApiServiceFactory.createInstance();
      const data = await apiService.getInfoFlowers();
      dispatch(ACTIONS_CREATORS.UPDATE(data));
    })();
  };
}
// Done
function getTokenAuthentication(login, password) {
  console.log("kva");
  return (dispatch) => {
    (async () => {
      const apiService = ApiServiceFactory.createInstance();
      const data = await apiService.getUser(login, password);
      dispatch(ACTIONS_CREATORS.UPDATE_TOKEN(data));
    })();
  };
}
// Done
function getTokenRegistration(login, password, firstName, lastName) {
  return (dispatch) => {
    (async () => {
      const apiService = ApiServiceFactory.createInstance();
      const data = await apiService.getRegistration(
        login,
        password,
        firstName,
        lastName
      );
      dispatch(ACTIONS_CREATORS.UPDATE_TOKEN(data));
    })();
  };
}
// DONE
function getPersonsLogin() {
  return (dispatch) => {
    (async () => {
      const apiService = ApiServiceFactory.createInstance();
      const data = await apiService.getPersons();
      dispatch(ACTIONS_CREATORS.UPDATE_PERSONS(data));
    })();
  };
}

// Done
function updateResult(price, result, symbol) {
  return (dispatch) => {
    (async () => {
      const apiService = ApiServiceFactory.createInstance();
      const data = await apiService.getResult(price, result, symbol);
      dispatch(ACTIONS_CREATORS.UPDATE_RESULT(data));
    })();
  };
}

// Done
function newOrder(login, flowers, cost) {
  return (dispatch) => {
    (async () => {
      const apiService = ApiServiceFactory.createInstance();
      await apiService.getNewOrders(login, flowers, cost);
      dispatch(ACTIONS_CREATORS.UPDATE_RESULT(0));
      dispatch(ACTIONS_CREATORS.CLEAR_ALL_ITEMS_IN_BASKET([]));
    })();
  };
}

export {
  ItemsInShop,
  getPersonsLogin,
  getTokenAuthentication,
  getTokenRegistration,
  newOrder,
  updateResult,
};
