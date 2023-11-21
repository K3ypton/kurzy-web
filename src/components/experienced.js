import React from 'react';
//import styled from "styled-components";
import becomeup from "../assets/images/becomeup.png";


const Experience = () => {
  return (
     <div className="relative h-96 bg-white">
       <div className="container mx-auto h-full flex">
          <div className="hero-content-right w-full p-0">
           <img src={becomeup} alt="hero" className="h-64 object-cover" />
         </div>
         <div className="hero-content-left bg-white max-w-4xl  w-full mx-auto p-">
           <h1 className="text-5xl mb-5 fw-7 ">
           Kurz.io helps you Become <br /> Experienced
           </h1>
          <p className="text-5xl fs-17 ">Web je vaším sprievodcom  online kurzov a vzdelávacích  <br />programov.  Nájdete tu  prehledný a komplexní zdroj <br />informacií o tom, ako rozšíriť svoje znalosti a zručnosti.<br />  Prechádzajte si ponuku  kurzy a programy a začnite <br />investovať do svojho osobného a profesijného rastu.</p>
         </div>
        
       </div>
     </div>
  );
 };
 
 export default Experience;