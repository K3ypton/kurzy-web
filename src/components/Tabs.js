import React, {useState} from 'react';
import styled from "styled-components";
import Course from "./Course";
import {/*WORD, EXCEL, POWERPOINT,PYTHON, */Microsoft_365 ,TEAMS, WEB_DEVELOPMENT, KIBERNETIKA,/* AWS, DESIGN, MARKETING*/} from "../utils/constants";
import courses from '../utils/data';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(TEAMS);
  const tabHandler = (category) => {
    setActiveTab(category);
  }

  return (
    <TabsWrapper>
      <div className='tabs'>
        <ul className='flex flex-wrap'>
      
          <li className='tabs-head-item'>
            <button type = "button" className={`tab-btn ${activeTab === TEAMS}`} onClick = {() => tabHandler(TEAMS)}>Microsoft Teams</button>
          </li>
          <li className='tabs-head-item'>
            <button type = "button" className={`tab-btn ${activeTab === Microsoft_365}`} onClick = {() => tabHandler(Microsoft_365)}>Microsoft 365/Word/Excel/PoverPoint</button>
          </li>
          <li className='tabs-head-item'>
            <button type = "button" className={`tab-btn ${activeTab === WEB_DEVELOPMENT}`} onClick = {() => tabHandler(WEB_DEVELOPMENT)}>Web Development</button>
          </li>
          <li className='tabs-head-item'>
            <button type = "button" className={`tab-btn ${activeTab === KIBERNETIKA}`} onClick = {() => tabHandler(KIBERNETIKA)}>Kibernetika</button>
          </li>
         
        </ul>

        <div className='tabs-body'>
          {
            courses.filter(course => course.category === activeTab).map((course) => (
              <Course key = {course.id} {...course} />
            ))
          }
        </div>
      </div>
    </TabsWrapper>
    
  )
}

const TabsWrapper = styled.div`
  .tabs{
    margin-top: 16px;
    .tabs-head-item button{
      hover
      border: 1px solid ;
      padding: 10px 13px;
      margin-right: 6px;
      transition: var(--transition);
      font-weight: 500;
      font-size: 15px;
      margin-bottom: 10px;

      &:hover{
        background-color: #3FB1B5;
        color: var(--clr-white);
      }
    }

    .tabs-body{
      margin-top: 32px;
    }

    @media screen and (min-width: 600px){
      .tabs-body{
        display: grid;
        gap: 26px;
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media screen and (min-width: 992px){
      .tabs-body{
        grid-template-columns: repeat(3, 1fr);
      }
    }

    @media screen and (min-width: 1400px){
      .tabs-body{
        grid-template-columns: repeat(4, 1fr);
      }
    }
  }
`;

export default Tabs


/*
<li className='tabs-head-item'>
            <button type = "button" className={`tab-btn ${activeTab === POWERPOINT}`} onClick = {() => tabHandler(POWERPOINT)}>PowerPoint</button>
          </li> 
          <li className='tabs-head-item'>
            <button type = "button" className={`tab-btn ${activeTab === AWS}`} onClick = {() => tabHandler(AWS)}>AWS Certification</button>
          </li>
          <li className='tabs-head-item'>
            <button type = "button" className={`tab-btn ${activeTab === DESIGN}`} onClick = {() => tabHandler(DESIGN)}>Design</button>
          </li>
          <li className='tabs-head-item'>
            <button type = "button" className={`tab-btn ${activeTab === MARKETING}`} onClick = {() => tabHandler(MARKETING)}>Marketing</button>
          </li>


          */