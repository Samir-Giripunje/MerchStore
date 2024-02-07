import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import service from '../../appwrite/service';
import Card from '../subcomponents/Card';
import FilterBtn from '../subcomponents/FilterBtn';
import DesignCard from '../subcomponents/DesignCard';
import { useSelector } from 'react-redux';

function Tshirts() {
  const dev_files_Ids = ["dev1", "dev2", "dev3"];
  const anime_files_Ids = ["dev4"];
  const all_files_Ids = [...dev_files_Ids, ...anime_files_Ids];

  const [imageToShow, setImageToShow] = useState(all_files_Ids);
  const [selectedFilter, setSelectedFilter] = useState("ALL"); // State to hold the selected filter

  const filter_text = ["ALL", "ANIME", "DEV"];

  const handleRender = (element) => {
    setSelectedFilter(element); // Update the selected filter
    if (element === "ANIME") {
      setImageToShow(anime_files_Ids);
    } else if (element === "DEV") {
      setImageToShow(dev_files_Ids);
    } else {
      setImageToShow(all_files_Ids);
    }
  };

  const currRender = useSelector((state) => state.auth.showDesign);

  return (
    !currRender ? (
      <div>
        <Header />
        <div className='flex space-x-4 pb-6 ml-6 '>
          {filter_text.map((element, index) => {
            return (
              <FilterBtn
                item={element}
                key={index}
                child="hover:scale-105"
                onClick={() => handleRender(element)}
                style={{ backgroundColor: selectedFilter === element ? 'gray' : '' }}
              />
            );
          })}
        </div>
        <div className='flex flex-wrap justify-center md:justify-between md:mx-28'>
          {imageToShow.map((item, index) => {
            return <Card key={item} url={service.getFile(item)} item={item} />;
          })}
        </div>
        <Footer />
      </div>
    ) : (<div><DesignCard /></div>)
  );
}

export default Tshirts;
