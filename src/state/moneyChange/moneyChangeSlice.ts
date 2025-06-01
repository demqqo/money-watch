import { createSlice } from "@reduxjs/toolkit";

interface MoneyChange {
    id?:number;
    value: number;
    name?:string;
}
const initialState: MoneyChange= {
    value: 0,
}

const moneyChangeSlice = createSlice({
    name: 'moneyChange',
    initialState: {income:0, expense:0},
    reducers:{
        income: (state, action)=>{
            state.income += action.payload
        },
        expense: (state, action)=>{
            state.expense += action.payload
        }
    }
})

export const {income, expense} = moneyChangeSlice.actions
export default moneyChangeSlice.reducer