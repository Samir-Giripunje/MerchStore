import React from "react";
import {ShirtLogo,HoodieLogo,WhatsappLogo,PhoneNumberLogo,MailLogo} from "../../assets/FooterLogo";
import { NavLink } from "react-router-dom";
const containerStyle={
  position: 'relative',
  bottom: 0
}

const horizontalRule = {
  border: '1px solid gray', // Specify the width, style, and color
  marginTop: '25px'
};

const content={
  display: window.innerWidth<=600 ? 'flex': '',
  paddingTop: '48px',
  paddingBottom: '48px'
}



function Footer() {
  return (
    <div className={containerStyle}>

    <hr  style={horizontalRule}/>
    <div className=" md:flex py-10  ">
   
      <div className="md:w-7/12 ">
        
          <div className=" mx-10 md:ml-32">
            <div className="text-justify pb-4">
              We are a student only organisation, and are in no way authorized to
              sell merch. This store is exclusively for IIT Dharwad Students and
              all kind of transactions are through personal accounts.
            </div>

            <div>Copyright© 2023 Students of IIT Dharwad</div>
          </div>
      </div>

      <div className="md:flex md:w-5/12  pt-6 md:pt-0">
  <div className="md:w-full ">
    <div className="flex justify-center  ">
      <div className="pr-3"><NavLink to='/tshirt'><ShirtLogo /></NavLink> </div>
      <div><NavLink to='/hoodie'> <HoodieLogo/></NavLink> </div>
    </div>
    <div className="text-2xl text-gray-700  pt-2 md:pt-0 flex justify-center "> StyleHub </div>
    <div className="text-2xl text-gray-700  flex justify-center">Merch Store</div>
    <div className="pt-4 flex justify-center ">
      <div> <WhatsappLogo/></div>
      <div className="pl-4"><PhoneNumberLogo/></div>
      <div className="pl-4"> <MailLogo/></div>
    </div>
  </div>
</div>


    </div>
    </div>
  );
}

export default Footer;
