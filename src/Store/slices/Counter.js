import { createSlice } from "@reduxjs/toolkit";

//for first time 
const initialValue = {
    counterValue : 0
}
const counter = createSlice({ 
    name:"counter",
    initialState : initialValue,//name const 
    reducers : {
        incrementCounter :(state , action) => {//function
            state.counterValue = state.counterValue + 1 // call the const counterValue
        },
        decrementCounter :(state , action) => {//function
            state.counterValue = state.counterValue - 1 // call the const value counterValue
        }
    }

})

//creat action from const counter and export it to 
export const { incrementCounter , decrementCounter } = counter.actions 


export default counter.reducer;



