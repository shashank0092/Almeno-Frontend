import { createSlice } from "@reduxjs/toolkit";

const intialState={
    userInfo:null
}

export const userDetails=createSlice({
    name:'userDetails',
    initialState:intialState,
    reducers:{
        changeInfo:(state,action)=>{
            return{
                ...state,
                userInfo:action.payload
            }
        },
        default:()=>{
            return intialState
        }
    }
})

export const {changeInfo}=userDetails.actions;
export default userDetails.reducer