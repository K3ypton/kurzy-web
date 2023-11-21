import React from 'react';
import Hero from "../components/Hero";
import CoursesList from "../components/CourseList";
import CategoriesList from "../components/CategoriesList";
import Experience from '../components/experienced';

const HomePage = () => {
  return (
    <div className='holder'>
      <Hero />
  
     
      <CoursesList />
    
      <Experience />

    </div>
  )
}

export default HomePage