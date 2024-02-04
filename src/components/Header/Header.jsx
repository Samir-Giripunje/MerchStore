import React from 'react'
import { NavLink } from 'react-router-dom'
import authSlice from '../../store/authSlice';
import {useSelector } from 'react-redux';
function Header() {

  const userData=useSelector((state)=>state.auth.status)


  return (
    <div className=' w-screen flex py-6'>
        <div className='text-2xl text-slate-900 font-bold w-1/2  text-center'>StyleHub Merch Store</div>
        <div className=' w-1/2 text-center'>
            <ul className='flex py-[1px]'>
                <NavLink to='/tshirt' 
                  style={({ isActive}) => {
                    return {
                      fontWeight: isActive ? "bold" : ""
                    };
                  }}
                  className=' hover:bg-slate-200  md:px-4 py-1 md:mx-2 md:rounded-xl '>   
                  T-Shirts
                </NavLink>

                <NavLink to='/hoodie' 
                  style={({ isActive}) => {
                    return {
                      fontWeight: isActive ? "bold" : ""
                    };
                  }}
                  className=' hover:bg-slate-200 md:px-4 py-1 md:mx-2 md:rounded-xl '>   
                  Hoodies
                </NavLink>

                <NavLink to='/customdesign' 
                  style={({ isActive}) => {
                    return {
                      fontWeight: isActive ? "bold" : ""
                    };
                  }}
                  className='bg-slate-950 text-white md:px-4 py-1 md:mx-2 md:rounded-xl'>   
                 Custom Design
                </NavLink>

                <NavLink to='/login' 
                  style={({ isActive}) => {
                    return {
                      fontWeight: isActive ? "bold" : ""
                    };
                  }}
                  className=' hover:bg-slate-200 md:px-4 py-1 md:mx-2 md:rounded-xl '>   
                   {userData ? "Logout" : "Login"}
                </NavLink>
            </ul>
        </div>
    </div>
  )
}

export default Header