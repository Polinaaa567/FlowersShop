import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiServiceFactory } from "../../../../transport/api/ApiServiceFactory";

const initialState = {
  items: [],
  result: 0,
  shoppingCart: [],
  history: [],
  dateTime: "",
  date: ''
};

const ItemsInShop = createAsyncThunk("basket/ItemsInShop", async () => {
  const apiService = ApiServiceFactory.createInstance();
  const data = await apiService.getInfoFlowers();

  return data;
});

const updateResult = createAsyncThunk(
  "basket/updateResult",
  async ({ price, result, symbol }) => {
    console.log(price, result, symbol);
    const apiService = ApiServiceFactory.createInstance();
    const data = await apiService.getResult(price, result, symbol);
    return data;
  }
);

const newOrder = createAsyncThunk(
  "basket/newOrder",
  async ({ login, flowers, cost, date }) => {
    const apiService = ApiServiceFactory.createInstance();
    const data = await apiService.getNewOrders(login, flowers, cost, date);
    return data;
  }
);

const historyOrder = createAsyncThunk(
  "basket/historyOrder",
  async ({ login }) => {
    const apiService = ApiServiceFactory.createInstance();
    const data = await apiService.getHistoryOrder(login);
    return data;
  }
);

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    exitClearBasket: (state) => {
      state.shoppingCart = [];
      state.result = 0;
      state.history = [];
      state.dateTime = "";
    },
    addItemsInShoppingCart: (state, action) => {
      state.shoppingCart = [...state.shoppingCart, action.payload];
      console.log(state.shoppingCart);
    },

    removeItemsInShoppingCart: (state, action) => {
      state.shoppingCart = state.shoppingCart.filter(
        (item, index) => index !== action.payload
      );
    },
    setDateTime: (state, action) => {
      state.dateTime = action.payload;
    },

    clearShoppingCart: (state) => {
      state.shoppingCart = [];
      state.result = 0;
      state.date = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateResult.fulfilled, (state, action) => {
        state.result = action.payload;
      })
      .addCase(ItemsInShop.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(newOrder.fulfilled, (state) => {
        state.shoppingCart = [];
        state.result = 0;
        state.date = '';
      })
      .addCase(historyOrder.fulfilled, (state, action) => {
        state.history = action.payload;
      });
  },
});

export const {
  exitClearBasket,
  addItemsInShoppingCart,
  removeItemsInShoppingCart,
  clearShoppingCart,
  setDateTime,
} = basketSlice.actions;

export { ItemsInShop, historyOrder, newOrder, updateResult };

export default basketSlice.reducer;
