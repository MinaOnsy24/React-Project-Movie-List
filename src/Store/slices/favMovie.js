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
            // state.forEach((e)=>console.log(e))
            const index = state.filter((movies) => movies.id !== action.payload.id);
            state = index;
        }
    }

})


export const { add , remove } = Favarites.actions ;
export default Favarites.reducer;
