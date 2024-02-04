// Card.jsx
import React from 'react';
import FilterBtn from './FilterBtn';
import { useDispatch } from 'react-redux';
import { designCard } from '../../../store/authSlice';

function Card({ url, item, orignalPrice, discoutPrice, }) {
  const cardStyles = `
    max-w-64 w-full min-w-40 border-solid hover:border-[1px] rounded-xl p-4  hover:border hover:border-gray-300  hover:shadow-[0_15px_15px_-5px]
  `;
        const dispatch = useDispatch()


  return (
    
        <div className={`${cardStyles}`}>
          <img key={item} src={url} alt={item} />
          <div className='flex justify-between pt-3'>
            <div className='flex space-x-2'>
              <div className='text-red-500 text-sm line-through pt-1'>₹ {orignalPrice = 600}</div>
              <div className='text-xl text-[#1652EE]'>₹ {discoutPrice = 600}</div>
            </div>
            <FilterBtn item={"View Design "} child={"text-white bg-slate-950 hover:shadow-m"} onClick={()=>dispatch(designCard())} />
          </div>
        </div>
      
    ) 
  
}

export default Card;
