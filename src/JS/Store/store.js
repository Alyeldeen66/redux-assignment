import { configureStore } from "@reduxjs/toolkit";
import listSlice from "../Reducers/reducer";


const store = configureStore({
    reducer : { 
        tasks : listSlice,
    },
});

export default store;