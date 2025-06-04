import { createSlice  } from "@reduxjs/toolkit";


interface incomeOrExpenseStatus{
    type: string
}
const initialState: incomeOrExpenseStatus = {
    type: 'income',
}
const isIncomeOrExpenseSlice = createSlice({
    name: 'isIncomeOrExpense',
    initialState,
    reducers:{
        ChangeToIncome: (state) => {
            state.type = 'income'
        },
        ChangeToExpense: (state) => {
            state.type = 'expense'
        }
    }

})

export const {ChangeToIncome, ChangeToExpense} = isIncomeOrExpenseSlice.actions
export default isIncomeOrExpenseSlice.reducer