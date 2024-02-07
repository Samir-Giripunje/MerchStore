

import React, { useEffect, useState } from 'react';
import service from '../../appwrite/service';
import FilterBtn from './FilterBtn';
import { useDispatch, useSelector } from 'react-redux';
import { designCard,cancelDesign } from '../../store/authSlice';

const dev_files_Ids = ["dev1", "dev2", "dev3", "dev4"];

function DesignCard() {
  const image = {
    maxHeight: '90vh',
  };


  const container = {
    maxWidth: '70vw',
    margin: 'auto', // Center horizontally
  };

  const dispatch = useDispatch();
  const link = useSelector((state) => state.auth.link);
  const [selectedImage, setSelectedImage] = useState(null); // State to track clicked image

  const handleSubmit = (item) => {
    dispatch(designCard(service.getFile(item).toString()));
    setSelectedImage(item); // Update state with clicked image
  };
  const handleBack=()=>{
      dispatch(cancelDesign())
  }

  return (
    <div className=' bg-violet-300'>
      <div className='flex justify-end pt-2 pb-4'>
      <button className='hover:font-semibold p-1 px-2 bg-orange-400 rounded-md mr-3' onClick={handleBack}>Back</button>
      </div>
    
      <div style={container} className=' pb-3 bg-white'>
        <div className='flex justify-center border-2 '>
          <div className='pt-10 object-cover transition-transform duration-300 transform hover:scale-[1.19] '>
            <img  className=' max-w-[300px] sm:max-w-[360px] md:max-w-[420px] lg:max-w-[500px]'src={link} alt="tshirt" />
          </div>
          <div className='py-5'>
           
            {
            dev_files_Ids.map((item) => (
              <img
                key={item}
                src={service.getFile(item)}
                alt={item}
                style={selectedImage === item || link==service.getFile(item)? {border: '5px solid black'} : {}}
                onClick={() => handleSubmit(item)}
                className='rounded-xl max-w-28 hidden sm:block'
              />
            ))}
          </div>
        </div>
        <div className='pt-5 pl-5 '>See More from this Category</div>
        <div className='flex max-w-96 pt-2 space-x-6 pl-5  '>
          {dev_files_Ids.map((item) => (
            <div key={item} className=' '>
              <img src={service.getFile(item)} alt={item}  onClick={() => handleSubmit(item)} />
            </div>
          ))}
        </div>
        <div className='flex pt-10 space-x-10 sm:space-x-24 md:space-x-48 lg:space-x-64 pb-10 pl-5'>
          <div>
            <div className='text-xl text-[#1652EE]'>₹ 600</div>
            <div>PRICE</div>
          </div>
          <div className="border-2 border-black inline-block rounded-md">{
            <select name="SM" id="cars" className='py-4 px-2'>
            <option value="SM">SM</option>
            <option value="M">M</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
            <option value="XXXL">XXXL</option>
          </select>}</div>
          <div>
            <FilterBtn item={"Order Now"} child={"text-white bg-slate-950 hover:shadow-m py-2"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesignCard;
