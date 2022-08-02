import {createAction, createReducer} from '@reduxjs/toolkit'

const ADD_IN_SHOP_LIST = 'ADD_IN_SHOP_LIST'

export const setPizzas = createAction('setPizzas')
export const setSelectPizza = createAction('addInShoplist')
export const setActiveDough = createAction('setActiveDough')
export const setActiveSize = createAction('setActiveSize')
export const setActiveCategory = createAction('setActiveCategory')
export const setTotalPizzasCount = createAction('setTotalPizzasCount')
export const setCurrentPage = createAction('setCurrentPage')

const pizzas =[]
let filterCategory = 'Все'

const reducer = createReducer(
    {
        pizzas,
        filterCategory,
        currentPage:1,
        totalPizzasCount:0,
        pizzasPerPage:6,
        sortBy : {name: 'популярности', sort:'popularity'},
    },
    (builder) => {
        builder
            .addCase(setPizzas, (state, action) => {
                const {pizzas} = {...action.payload}
                state.pizzas = pizzas
            })
            .addCase(setSelectPizza, (state, action) => {
                const {index} = {...action.payload}
                state.pizzas.map(u => {
                    if (u.id == index) {
                        u.count++;
                        u.selected = true
                    }
                })
            })
            .addCase(setActiveDough, (state, action) => {
                const {index, dough} = {...action.payload}
                state.pizzas.map(u => u.id == index ? u.active_dough = dough : null)
            })
            .addCase(setActiveSize, (state, action) => {
                const {index, size} = {...action.payload}
                state.pizzas.map(u => u.id == index ? u.active_size = size : null)
            })
            .addCase(setActiveCategory, (state, action) => {
                const {category} = {...action.payload}
                state.filterCategory = category
            })
            .addCase(setTotalPizzasCount, (state, action) => {
                const {totalPizzasCount} = {...action.payload}
                state.totalPizzasCount = totalPizzasCount
            })
            .addCase(setCurrentPage, (state, action) => {
                debugger
                const {page} = {...action.payload}
                state.currentPage = page
            })

    }
)

export default reducer
