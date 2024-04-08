const action = () => {
  return { type: "", payload: {} };
};

export const ACTIONS_TYPES = {
  UPDATE: "update",
  UPDATE_LOGIN: "update_login", //надо сделать в редьюсе и убрать из page login, registration
  UPDATE_PASSWORD: "update_password", //надо сделать в редьюсе и убрать из page login, registration
  UPDATE_TOKEN: "update_token",
  UPDATE_PASSWORD2: "update_password2", //надо сделать в редьюсе и убрать из page registration
  UPDATE_FIRSTNAME: "update_firstname", //надо сделать в редьюсе и убрать из page registration
  UPDATE_LASTNAME: "update_lastname", //надо сделать в редьюсе и убрать из page registration
  REGISTRATION: "registration", //надо сделать в редьюсе и убрать из page registration
  UPDATE_PERSONS: "update_persons",
  UPDATE_USERS: "update_users", //надо сделать в редьюсе и убрать из page login

  // ***************************

  UPDATE_RESULT: "update_result",
  ADD_BASKET: "add_basket", //надо сделать в редьюсе и убрать из page main
  REMOVE_ITEMS: "remove_items",
  CLEAR_ALL_ITEMS_IN_BASKET: "clear_all_items_in_basket",
};

export const ACTIONS_CREATORS = {
  UPDATE: (value) => {
    const a = action();
    a.type = ACTIONS_TYPES.UPDATE;
    a.payload.value = value;
    console.log(a);
    return a;
  },
  REGISTRATION: (value) => {
    const a = action();
    a.type = ACTIONS_TYPES.REGISTRATION;
    a.payload.registration = value;
    console.log(a);
    return a;
  },
  UPDATE_LOGIN: (login) => {
    const a = action();
    a.type = ACTIONS_TYPES.UPDATE_LOGIN;
    a.payload.login = login;
    console.log(a);
    return a;
  },

  UPDATE_PASSWORD: (password) => {
    const a = action();
    a.type = ACTIONS_TYPES.UPDATE_PASSWORD;
    a.payload.password = password;
    console.log(a);
    return a;
  },

  UPDATE_TOKEN: (token) => {
    const a = action();
    a.type = ACTIONS_TYPES.UPDATE_TOKEN;
    a.payload.token = token;
    console.log(a);
    return a;
  },
  UPDATE_PASSWORD2: (passwd2) => {
    const a = action();
    a.type = ACTIONS_TYPES.UPDATE_PASSWORD2;
    a.payload.password2 = passwd2;
    console.log(a);
    return a;
  },

  UPDATE_FIRSTNAME: (firstName) => {
    const a = action();
    a.type = ACTIONS_TYPES.UPDATE_FIRSTNAME;
    a.payload.firstName = firstName;
    console.log(a);
    return a;
  },
  UPDATE_LASTNAME: (lastName) => {
    const a = action();
    a.type = ACTIONS_TYPES.UPDATE_LASTNAME;
    a.payload.lastName = lastName;
    console.log(a);
    return a;
  },
  UPDATE_PERSONS: (persons) => {
    const a = action();
    a.type = ACTIONS_TYPES.UPDATE_PERSONS;
    a.payload.persons = persons;
    console.log(a);
    return a;
  },
  UPDATE_USERS: (person) => {
    const a = action();
    a.type = ACTIONS_TYPES.UPDATE_USERS;
    a.payload.user = person;
    console.log(a);
    return a;
  },

  // НЕ знаю надо ли мне это всё, по ощущениям будто прайс нафиг не нужон, но просто чтобы был, взгляну на него позже

  UPDATE_RESULT: (result) => {
    const a = action();
    a.type = ACTIONS_TYPES.UPDATE_RESULT;
    a.payload.result = result;
    console.log(a);
    return a;
  },

  ADD_BASKET: (value) => {
    const a = action();
    console.log();
    a.type = ACTIONS_TYPES.ADD_BASKET;
    a.payload = value;
    console.log(a);
    return a;
  },

  REMOVE_ITEMS: (value) => {
    const a = action();
    console.log(a.payload);
    a.type = ACTIONS_TYPES.REMOVE_ITEMS;
    a.payload = value;
    console.log("ddddd", value);
    console.log(a);
    return a;
  },

  CLEAR_ALL_ITEMS_IN_BASKET: (value) => {
    const a = action();
    a.type = ACTIONS_TYPES.CLEAR_ALL_ITEMS_IN_BASKET;
    a.payload.basket = value;
    console.log("ddddd", value);
    console.log(a);
    return a;
  },
};
