import React from 'react'
import { NavLink,useNavigate } from 'react-router-dom'
import LogoutBtn from './LogoutBtn';
import {useSelector } from 'react-redux';
function Header() {

  const authStatus=useSelector((state)=>state.auth.status)
  const navigate = useNavigate()
  

  const navItems = [
    {
      name: "T-Shirts",
      slug: "/tshirt",
      active: true,
  },
  {
      name: "Hoodies",
      slug: "/hoodie",
      active: true,
  },

  ]

  return (
    <div className=' w-screen flex py-6'>
        <div className='text-2xl text-slate-900 font-bold w-1/2  text-center'>StyleHub Merch Store</div>
        <div className=' w-1/2 text-center'>
            <ul className='flex py-[1px]'>
                

            {
            navItems.map((item) =>
      item.active ? (
      <li key={item.name} className='mx-2 my-[3px]'>
      <NavLink to={item.slug}
          style={({ isActive}) => {
            return {
              fontWeight: isActive ? "bold" : ""
            };
          }}
          className=' hover:bg-slate-200 md:rounded-xl py-2 px-2'
          
          >  
          {item.name}
      </NavLink>
     </li>
        ) : null
      )
      }


               <NavLink to='/customdesign' 
                  style={({ isActive}) => {
                    return {
                      fontWeight: isActive ? "bold" : ""
                    };
                  }}
                  className='bg-slate-950 text-white md:px-4 py-1 md:mx-2 md:rounded-xl'>   
                 Custom Design
                </NavLink>

            {authStatus ? (
              <li>
                <LogoutBtn />
              </li>
            ):(
              <NavLink to='/login' 
                  style={({ isActive}) => {
                    return {
                      fontWeight: isActive ? "bold" : ""
                    };
                  }}
                  className=' hover:bg-slate-200 md:px-4 py-1 md:mx-2 md:rounded-xl '
                  
                  >  
                  Login
                  </NavLink>
            )}
            </ul>
        </div>
    </div>
  )
}

export default Header