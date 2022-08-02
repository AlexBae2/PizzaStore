import { configureStore } from '@reduxjs/toolkit'
import reducers from "./contentReducer";

export const store = configureStore({
    reducer: {
        main: reducers,
    },
})

window.store = store