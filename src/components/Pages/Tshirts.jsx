// Tshirts.jsx
import React, { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import service from '../../appwrite/service';
import Card from '../subcomponents/Card';
import FilterBtn from '../subcomponents/FilterBtn';
import DesignCard from '../subcomponents/DesignCard';


import { useSelector, useDispatch } from 'react-redux'; // Corrected import

function Tshirts() {
  const dev_files_Ids = ["dev1", "dev2", "dev3", "dev4"];
  const filter_text = ["ALL", "ANIME", "DEV"];
 

  const currRender = useSelector((state) => state.auth.showDesign);



  return (
    !currRender ?(
      <div >
        <Header />
        <div className='flex space-x-4 pb-6 pl-1'>
          {filter_text.map((element, index) => {
            return <FilterBtn item={element} key={index} />;
          })}
        </div>
        <div className='flex flex-wrap justify-center md:justify-between md:mx-28'>
          {dev_files_Ids.map((item, index) => {
            return <Card key={item} url={service.getFile(item)} item={item} />;
          })}
        </div>
        <Footer />
      </div>
    ):(<div><DesignCard /></div>)
  );
}

export default Tshirts;
