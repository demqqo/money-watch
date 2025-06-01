import { configureStore } from "@reduxjs/toolkit";
import moneyChangeReducer  from './moneyChange/moneyChangeSlice'
export const store = configureStore({
    reducer:{
        moneyChange: moneyChangeReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch