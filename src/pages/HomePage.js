import React from 'react';
import Hero from "../components/Hero";
import CoursesList from "../components/CourseList";

import Experience from '../components/experienced';

const HomePage = () => {
  return (
    <div className='holder'>
      <Hero />
      <Experience />.  
      
     
      <CoursesList />
    
    

    </div>
  )
}

export default HomePage