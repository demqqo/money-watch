import {createSlice} from '@reduxjs/toolkit'

interface filterChoice{
    choice: number

}

const initialState:filterChoice = {
    choice: 0
}

const filterSlice = createSlice({
    name: 'filterSlice',
    initialState,
    reducers:{
        changeFilter: (state, action)=>{
            state.choice = action.payload
        }
    }
}
    )
    


export const {changeFilter} = filterSlice.actions
export default filterSlice.reducer