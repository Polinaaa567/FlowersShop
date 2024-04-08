import { ACTIONS_TYPES } from "../actions.js";

const reducer = (
  state = {
    value: [],
    login: "",
    password: "",
    token: "",
    lastName: "",
    firstName: "",
    password2: "",
    registration: "",
    persons: [],
    user: "",
    // new nado sdelat
    result: 0,
    basket: [],
    // нажимаешь на кнопку, все данные записываются в массив как и передавались изначально, берётся
    // отдельно цена за букет и результат, делается ассинхронный метод и записывается в результат,
    // возможно поле price нафиг не нужно
  },
  action
) => {
  switch (action.type) {
    // Done
    case ACTIONS_TYPES.UPDATE:
      console.log("vmdj");
      return {
        ...state,
        ...action.payload,
      };
    case ACTIONS_TYPES.REGISTRATION:
      console.log("vmdj");
      return {
        ...state,
        ...action.payload,
      };
    case ACTIONS_TYPES.UPDATE_LOGIN:
      return {
        ...state,
        ...action.payload,
      };

    case ACTIONS_TYPES.UPDATE_PASSWORD:
      return {
        ...state,
        ...action.payload,
      };
    case ACTIONS_TYPES.UPDATE_PASSWORD2:
      return {
        ...state,
        ...action.payload,
      };
    case ACTIONS_TYPES.UPDATE_TOKEN:
      return {
        ...state,
        ...action.payload,
      };
    case ACTIONS_TYPES.UPDATE_FIRSTNAME:
      return {
        ...state,
        ...action.payload,
      };
    case ACTIONS_TYPES.UPDATE_LASTNAME:
      return {
        ...state,
        ...action.payload,
      };
    case ACTIONS_TYPES.UPDATE_PERSONS:
      return {
        ...state,
        ...action.payload,
      };
    case ACTIONS_TYPES.UPDATE_USERS:
      return {
        ...state,
        ...action.payload,
      };

    // +++++++++++++++++++++++++++++++++
// Done
    case ACTIONS_TYPES.UPDATE_RESULT:
      return {
        ...state,
        ...action.payload,
      };
// Done
    case ACTIONS_TYPES.ADD_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
// Done
    case ACTIONS_TYPES.REMOVE_ITEMS:
      console.log(action.payload);
      return {
        ...state,
        basket: state.basket.filter((item, index) => index !== action.payload),
      };
// Done
    case ACTIONS_TYPES.CLEAR_ALL_ITEMS_IN_BASKET:
      return {
        ...state,
        ...action.payload,
      };

    default:
      console.log("vmd5j");
      return state;
  }
};

export { reducer };
