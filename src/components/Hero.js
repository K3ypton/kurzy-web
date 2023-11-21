import React from 'react';
import heroimg from "../assets/images/heroimg.png";


const Hero = () => {
  return (
     <div className="relative h-96 bg-white">
       <div className="container mx-auto h-full flex">
         <div className="hero-content-left bg-white max-w-10xl w-full mx-auto p-">
           <h1 className="text-10xl fs-40">
             Posilnite svoju budúcnosť<br /> a rozvíjajte svoje zručnosti pomocou kurzov
           </h1>
         </div>
         <div className="hero-content-right w-full p-0">
           <img src={heroimg} alt="hero" className="h-64 object-cover" />
         </div>
       </div>
     </div>
  );
 };
 
 export default Hero;