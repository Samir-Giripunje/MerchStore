import { createSlice } from '@reduxjs/toolkit'

const initialState={
    status:false,
    userData:null,
    showDesign:false
}

const authSlice=createSlice({
    name:"auth",
    initialState,
    reducer:{
            login: (state,action)=>{
                state.status = true;
                state.userData=action.payload.userData;
            },
            logout:(state)=>{
                state.status=false;
                state.userData=null;
            },
            designCard:()=>{
                state.showDesign=!showDesign;
            }
    }
})

export const  {login,logout,designCard}=authSlice.actions;
export default authSlice.reducer