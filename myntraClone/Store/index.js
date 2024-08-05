import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemSlice";
import fetchStatusSlice from "./featchingStatusSlice";
import bagSlice from "./bagSlice";

const myntraStore = configureStore({
  reducer: {
    item: itemSlice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
    bag: bagSlice.reducer,
  },
});

export default myntraStore;
