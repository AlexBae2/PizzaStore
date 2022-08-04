import { createAction, createReducer } from "@reduxjs/toolkit";

export const setPizzas = createAction("setPizzas");
export const setActiveCategory = createAction("setActiveCategory");
export const setTotalPizzasCount = createAction("setTotalPizzasCount");
export const setCurrentPage = createAction("setCurrentPage");
export const setSort = createAction("setSort");

const mainPage = createReducer(
  {
    pizzas: [],
    selectedPizza: [],
    filterCategory: "Все",
    currentPage: 1,
    totalPizzasCount: 0,
    pizzasPerPage: 6,
    sortBy: { name: "популярности", sort: "popularity" },
  },
  (builder) => {
    builder
      .addCase(setPizzas, (state, action) => {
        const { pizzas } = { ...action.payload };
        state.pizzas = pizzas;
      })
      .addCase(setActiveCategory, (state, action) => {
        const { category } = { ...action.payload };
        state.filterCategory = category;
        debugger;
      })
      .addCase(setTotalPizzasCount, (state, action) => {
        const { totalPizzasCount } = { ...action.payload };
        state.totalPizzasCount = totalPizzasCount;
      })
      .addCase(setCurrentPage, (state, action) => {
        const { page } = { ...action.payload };
        state.currentPage = page;
      })
      .addCase(setSort, (state, action) => {
        const { sort } = { ...action.payload };
        state.sortBy = sort;
      });
  }
);

export default mainPage;
