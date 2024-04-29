import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getHistoryOrderWS } from "../../../../transport/WS/WebSocket";
// import { ApiServiceFactory } from "../../../../transport/api/ApiServiceFactory";

import { getInfoFlowers, getResult, getNewOrders } from "../../../../transport/api/ApiService";
const initialState = {
  items: [],
  result: 0,
  shoppingCart: [],
  history: [],
  dateTime: "",
  date: "",
};

const ItemsInShop = createAsyncThunk("basket/ItemsInShop", async () => {
  // const apiService = ApiServiceFactory.createInstance();
  const data = await getInfoFlowers();

  return data;
});

const updateResult = createAsyncThunk(
  "basket/updateResult",
  async ({ price, result, symbol }) => {
    console.log(price, result, symbol);
    // const apiService = ApiServiceFactory.createInstance();
    const data = await getResult(price, result, symbol);
    return data;
  }
);

const newOrder = createAsyncThunk(
  "basket/newOrder",
  async ({ login, flowers, cost, date }) => {
    // const apiService = ApiServiceFactory.createInstance();
    const data = getNewOrders(login, flowers, cost, date);
    return data;
  }
);

// const historyOrder = createAsyncThunk(
//   "basket/historyOrder",
//   async ({ login, token }) => {
//     const apiService = ApiServiceFactory.createInstance();
//     const data = await apiService.getHistoryOrder(login, token);
//     return data;
//   }
// );

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
      state.date = "";
    },
    setHistory: (state, action) => {
      state.history = action.payload;
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
        state.date = "";
      });
    // .addCase(historyOrder.fulfilled, (state, action) => {
    //   state.history = action.payload;
    // });
  },
});

export const WSInfo = (token) => async (dispatch) => {
  console.log("захожу ли я");
  let ws = await getHistoryOrderWS();

  ws.onopen = (event) => {
    console.log("WS counter was opened: " + event);
    ws.send(token);
  };

  ws.onmessage = (event) => {
    const data = event.data;
    console.log(data);
    const infoFlowers = JSON.parse(data).map((item) => {
      return {
        created_at: item.created_at,
        cost: item.cost,
        flowers: {
          title: item.flowers.title,
          image_path: item.flowers.image_path,
          description: item.flowers.description,
          price: item.flowers.price,
          flowerID: item.flowers.flowerID,
        },
        orderID: item.orderID,
        personLogin: item.personLogin,
        dateComplete: item.dateComplete,
      };
    });
    dispatch(basketSlice.actions.setHistory(infoFlowers));
  };
};

export const {
  exitClearBasket,
  addItemsInShoppingCart,
  removeItemsInShoppingCart,
  clearShoppingCart,
  setDateTime,
} = basketSlice.actions;

export {
  ItemsInShop,
  // historyOrder,
  newOrder,
  updateResult,
};

export default basketSlice.reducer;
