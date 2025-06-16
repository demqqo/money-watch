import { createSlice  } from "@reduxjs/toolkit";

interface refreshTriger{
    value: number
    createdAt: number
}

const initialState: refreshTriger = {
    value: 0,
    createdAt: 0,
}

const refreshTrigerSlice = createSlice({
    name: 'refreshTriger',
    initialState,
    reducers:{
        Refresh: (state)=>{
           state.value= Number(Date.now())
        },
        Date: (state)=>{
            state.createdAt= Date.now()
        }
    }
})

export const {Refresh} = refreshTrigerSlice.actions
export default refreshTrigerSlice.reducer