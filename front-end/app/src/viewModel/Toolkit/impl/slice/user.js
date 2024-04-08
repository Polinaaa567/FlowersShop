import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiServiceFactory } from "../../../../transport/api/ApiServiceFactory";

const initialState = {
  login: "",
  password: "",
  token: "",
  lastName: "",
  firstName: "",
  password2: "",
  registration: "",
  persons: [],
  user: "",
  info: "",
};

const getTokenAuthentication = createAsyncThunk(
  "user/getToken",
  async ({ login, password }) => {
    const apiService = ApiServiceFactory.createInstance();
    const data = await apiService.getUser(login, password);
    return data;
  }
);

const getPersonsLogin = createAsyncThunk("user/getPersonsLogin", async () => {
  const apiService = ApiServiceFactory.createInstance();
  const data = await apiService.getPersons();
  return data;
});

const getPersonsInfo = createAsyncThunk(
  "user/getPersonsInfo",
  async ({ login }) => {
    const apiService = ApiServiceFactory.createInstance();
    const data = await apiService.getInfoUser(login);
    return data;
  }
);

const getTokenRegistration = createAsyncThunk(
  "user/getTokenRegistration",
  async ({ login, password, firstName, lastName }) => {
    const apiService = ApiServiceFactory.createInstance();
    const data = await apiService.getRegistration(
      login,
      password,
      firstName,
      lastName
    );
    console.log(data);
    return data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    exitClearUser: (state) => {
      state.user = "";
      state.token = "";
    },
    setNewLogin: (state, action) => {
      state.login = action.payload;
    },
    setNewPassword: (state, action) => {
      state.password = action.payload;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setPassword2: (state, action) => {
      state.password2 = action.payload;
    },
    setRegistration: (state, action) => {
      state.registration = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
      state.login = "";
    },
    clearDataAfterAuthentication: (state) => {
      state.password = "";
    },

    clearDataAfterRegistration: (state) => {
      state.password = "";
      state.registration = "";
      state.password2 = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTokenAuthentication.fulfilled, (state, action) => {
        state.token = action.payload;
      })
      .addCase(getPersonsLogin.fulfilled, (state, action) => {
        state.persons = action.payload;
      })
      .addCase(getTokenRegistration.fulfilled, (state, action) => {
        state.token = action.payload;
      })
      .addCase(getPersonsInfo.fulfilled, (state, action) => {
        state.info = action.payload;
      });
  },
});

export const {
  exitClearUser,
  setFirstName,
  setNewLogin,
  setNewPassword,
  setPassword2,
  setRegistration,
  setUser,
  setLastName,
  clearDataAfterAuthentication,
  clearDataAfterRegistration,
} = userSlice.actions;

export {
  getPersonsInfo,
  getPersonsLogin,
  getTokenAuthentication,
  getTokenRegistration,
};

export default userSlice.reducer;
