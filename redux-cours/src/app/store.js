import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/CounterSlice";
import produitsSlice from "../features/produits/ProduitsSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    produits: produitsSlice
  },
});

export default store;
