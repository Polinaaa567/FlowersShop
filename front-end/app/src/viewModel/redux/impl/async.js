import { ApiServiceFactory } from "../../../transport/api/ApiServiceFactory";
import { ACTIONS_CREATORS } from "./actions.js";

// Done
function async_update() {
  console.log("я здесь async_update");
  return (dispatch) => {
    (async () => {
      const apiService = ApiServiceFactory.createInstance();
      const data = await apiService.getInfoFlowers();
      dispatch(ACTIONS_CREATORS.UPDATE(data));
    })();
  };
}
// Done
function async_Token(login, password) {
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
function async_Registration(login, password, firstName, lastName) {
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
function async_getPersons() {
  return (dispatch) => {
    (async () => {
      const apiService = ApiServiceFactory.createInstance();
      const data = await apiService.getPersons();
      dispatch(ACTIONS_CREATORS.UPDATE_PERSONS(data));
    })();
  };
}

// Done
function async_getResult(price, result, symbol) {
  return (dispatch) => {
    (async () => {
      const apiService = ApiServiceFactory.createInstance();
      const data = await apiService.getResult(price, result, symbol);
      dispatch(ACTIONS_CREATORS.UPDATE_RESULT(data));
    })();
  };
}

// Done
function async_NewOrder(login, flowers, cost) {
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
  async_NewOrder,
  async_Registration,
  async_Token,
  async_getPersons,
  async_getResult,
  async_update,
};
