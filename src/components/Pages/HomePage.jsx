import React from 'react';
import backgroundImage from '../../assets/HeaderBackground.png';
import { Link } from 'react-router-dom';
import Arrow from '../../assets/Arrow'
import Footer from '../Footer/Footer';
import service from '../../appwrite/service';

function HomePage() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    height: '100vh',
    width:'100%',
    zIndex: -1,
    
  };
  const contentStyle = {
    marginTop: window.innerWidth < 600 ? '28vh' : '45vh',
    marginLeft:'10vh',
    marginRight:'10vh'
  };

  const dev_files_Ids = ["dev1", "dev2", "dev3", "dev4"];

  return (
   <div>
   
    <div style={containerStyle}>
      <div style={contentStyle}>
        <div className='text-4xl font-medium pb-2 md:pb-1 text-center'>StyleHub Merch Store</div>
        <div className='text-3xl font-medium mb-2 text-center'>Fashion Fervor for the Fearless Youth</div>
      </div>
      <div>
        
        <Link to='/tshirt' className='flex bg-slate-950 text-white rounded-xl px-10 py-3' >
          <span> Browse Our Collection </span>      
          <span className='ml-2'><Arrow /></span>
      </Link>
      </div>
      <div className='md:flex md:mt-20 mt-16'>
  <div className='md:text-right text-center mb-3 md:w-1/4 md:self-center text-4xl'>
    About Us
  </div>
  <div className='md:w-1/2 text-justify mx-12 md:mr-auto md:order-2 pb-10'>
    Welcome to our exclusive student-only merch store, catering to the vibrant community of IIT Dharwad! We understand the unique spirit and identity of our student body, and our mission is to provide you with the trendiest t-shirts and hoodies that truly reflect your individuality.
    <br />
    <br />
    Whether you're looking for a statement t-shirt to show off your personality, a cozy hoodie for those chilly evenings, or simply want to showcase your love for IIT Dharwad, our store has you covered. Join us in embracing the spirit of unity and self-expression through our carefully curated merchandise.
  </div>
</div>


<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
  {dev_files_Ids.map((item) => {
    const url = service.getFile(item);
    return (
      <img
        className='max-w-56 sm:max-w-64 border-solid'
        key={item}
        src={url}
        alt={item}
      />
    );
  })}
</div>

    <Footer/>
      </div>
      
    </div>
   

   
  
  );
}

export default HomePage;
