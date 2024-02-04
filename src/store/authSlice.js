import { createSlice } from '@reduxjs/toolkit'

const initialState={
    status:false,
    userData:null,
    showDesign:false,
    link:""
}

const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
            login: (state,action)=>{
                state.status = true;
                state.userData=action.payload.userData;
            },
            logout:(state)=>{
                state.status=false;
                state.userData=null;
            },
            designCard:(state,action)=>{
                state.showDesign=true;
                state.link=action.payload
            }
    }
})

export const  {login,logout,designCard}=authSlice.actions;
export default authSlice.reducer