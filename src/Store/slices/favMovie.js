import { createSlice } from "@reduxjs/toolkit";


//for first time 
// const initialValue = {
//     favMovies : []
// }


const Favarites = createSlice({ 
    name:"Favarites",
    initialState : [],
    reducers : {
        add :(state , action) => {//function
            state.push(action.payload)
        },
        remove :(state , action) => {//function

            const index = state.findIndex((movies) => movies.id === action.payload.id);
            state.splice(index, 1);
        }
    }

})


export const { add , remove } = Favarites.actions ;
export default Favarites.reducer;
