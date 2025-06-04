import { configureStore } from "@reduxjs/toolkit";
import moneyChangeReducer  from './moneyChange/moneyChangeSlice'
import globalStateReducer from './globalStates/modalComponentSlice.ts'
import isIncomeOrExpenseReducer from './globalStates/expenseOrIncomeSlice.ts'
export const store = configureStore({
    reducer:{
        moneyChange: moneyChangeReducer,
        globalState: globalStateReducer,
        isIncomeOrExpenseSlice: isIncomeOrExpenseReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch