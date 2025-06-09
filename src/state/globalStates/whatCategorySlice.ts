import { createSlice  } from "@reduxjs/toolkit";

interface modalStatus{
    value: string
}

const initialState: modalStatus = {
    value: ''
}

const whatCategorySlice = createSlice({
    name: 'whatCategory',
    initialState,
    reducers:{
        changeCategory: (state, action)=>{
           state.value = action.payload
        }
    }
})

export const {changeCategory} = whatCategorySlice.actions
export default whatCategorySlice.reducer