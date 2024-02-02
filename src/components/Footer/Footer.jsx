import React from "react";
import {ShirtLogo,HoodieLogo,WhatsappLogo,PhoneNumberLogo,MailLogo} from "../../assets/FooterLogo";

function Footer() {
  return (
    <div className="relative b-0">

    <hr  className=" border-slate-600 h-1"/>
    <div className=" flex py-10">
   
      <div className="w-7/12">
        
          <div className="md:ml-44">
            <div className="md:text-justify pb-4">
              We are a student only organisation, and are in no way authorized to
              sell merch. This store is exclusively for IIT Dharwad Students and
              all kind of transactions are through personal accounts.
            </div>

            <div>Copyright© 2023 Students of IIT Dharwad</div>
          </div>
      </div>

      <div className="w-5/12">
        
        <div className="md:ml-20">
          <div className="flex pl-12">
            <div className="pr-3"> <ShirtLogo /></div>
           <div> <HoodieLogo/></div>
            
          </div>
          <div className="text-2xl text-gray-700 pl-8 pt-2"> StyleHub </div>
          <div className="text-2xl  text-gray-700 pl-4">Merch Store</div>
          <div className="pt-4 flex ">
            <div className="pl-8"> <WhatsappLogo/></div>
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
