import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
    name : 'list',
    initialState : {
        value :[
            {
            id : 1,
            description : "Wake up at 8 a.m",
            isDone : 'Done'
          },
          {
            id : 2,
            description : "Make my self a breakfast",
            isDone : 'Not Done'
          },
        ]
    },
    reducers : {
        addToTasks : (state,action) =>{
            return{
                ...state,
                value : [...state.value,action.payload]
            }
        },
    }
});

export const {addToTasks} = listSlice.actions;

export default listSlice.reducer;