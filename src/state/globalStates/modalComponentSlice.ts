import { createSlice  } from "@reduxjs/toolkit";

interface modalStatus{
    isOpen: boolean
}

const initialState: modalStatus = {
    isOpen: false,
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
        }
    }
})

export const {OpenModal, CloseModal} = globalStateSlice.actions
export default globalStateSlice.reducer