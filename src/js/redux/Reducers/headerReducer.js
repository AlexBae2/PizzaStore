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
      const allСoincident = state.item.filter(
        (u) =>
          u.id === item.id && u.size === item.size && u.dough === item.dough
      );
      if (allСoincident.length === 0) state.item.push({ ...item, count: 1 });
      else allСoincident[0].count += 1;
    },
    clearItems(state) {
      state.item = [];
    },
    removeItem(state, action) {
      const { id, size, dough } = { ...action.payload };
      state.item = state.item.filter(
        (u) => u.id !== id || u.size !== size || u.dough !== dough
      );
    },
  },
});

export const { addItem, removeItem, clearItems } = cartSlicer.actions;
export default cartSlicer.reducer;
