import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: [],
};

const cartSlicer = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addItem(state, action) {
      const item = { ...action.payload };
      state.item.push(item);
    },
    clearItems(state) {
      state.item = [];
    },
    removeItem(state, action) {
      state.item.filter((u) => u.id !== action.payload);
    },
  },
});

export const { addItem, removeItem, clearItems } = cartSlicer.actions;
export default cartSlicer.reducer;
