import { createSlice  } from "@reduxjs/toolkit";

interface modalStatus{
    isOpen: boolean,
    mode: any
    data: any
    
}

const initialState: modalStatus = {
    isOpen: false,
    mode: null, // e.g., "add-income", "add-expense", "edit"
    data: null
}

const globalStateSlice = createSlice({
    name: 'globalState',
    initialState,
    reducers:{
        OpenModal: (state)=>{
           state.isOpen=true
        },
        CloseModal: (state)=>{
            state.isOpen=false
        },
        AddExpense: (state)=>{
            state.mode = 'add-expense'
        },
        AddIncome: (state)=>{
            state.mode = 'add-income'
        },
        EditValue: (state)=>{
            state.mode = 'edit-value'
        }
    }
})

export const {OpenModal, CloseModal, AddExpense, AddIncome, EditValue, ChangeToFilter} = globalStateSlice.actions
export default globalStateSlice.reducer