//المكان المسؤل للتعديل فى ال counter {reducer}

import { configureStore } from "@reduxjs/toolkit";
import counter from './slices/Counter'
import favMovie from './slices/favMovie'
export default configureStore({
    reducer : {
        counter ,
        favMovie ,
    }
})

