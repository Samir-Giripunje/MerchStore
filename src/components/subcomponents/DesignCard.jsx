import React from 'react';
import service from '../../appwrite/service';
import FilterBtn from './FilterBtn';

const dev_files_Ids = ["dev1", "dev2", "dev3", "dev4"];

function DesignCard({ link }) {
  const image = {
    maxHeight: '90vh',
  };

  const subImage = {
    maxHeight: '26vh',
  };

  const container = {
    maxWidth: '70vw',
    margin: 'auto', // Center horizontally
 
  };


  return (
   <div className=''>
    <div className=''></div>
     <div style={container}>
      <div className='flex justify-center'>
        <div className='pt-10'>
          <img style={image} src={link} alt="tshirt" />
        </div>
        <div>
          {dev_files_Ids.map((item) => (
            <img key={item} src={service.getFile(item)} alt={item} style={subImage} />
          ))}
        </div>
      </div>
      <div>See More from this Category</div>
      <div className='flex max-w-96'>
        {dev_files_Ids.map((item) => (
          <div key={item}>
            <img src={service.getFile(item)} alt={item} style={subImage} />
          </div>
        ))}
      </div>
      <div className='flex'>
        <div>
          <div className='text-xl text-[#1652EE]'>₹ 600</div>
          <div>PRICE</div>
        </div>
        <div>selection</div>
        <div>
          <FilterBtn item={"Order Now"} child={"text-white bg-slate-950 hover:shadow-m"} />
        </div>
      </div>
    </div>
   </div>
  );
}

export default DesignCard;