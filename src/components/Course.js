import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";


const Course = (props) => {
  const {id, image, course_name} = props;
 

  return (
    <CourseCard>
      <div className='item-img'>
        <img src = {image} alt = {course_name} />
      </div>
      <div className='item-body'>
        <h6 className='item-name'>{course_name}</h6>

  
      </div>
      <div className='item-btns flex'>
        <Link to = {`/courses/${id}`} className = "item-btn see-details-btn">Zisti viac</Link>
           </div>
    </CourseCard>
  )
}

const CourseCard = styled.div`
  margin-bottom: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: rgba(149, 157, 165, 0.1) 0px 8px 24px;
  display: flex;
  flex-direction: column;
  .item-body{
    margin: 14px 0;
    padding: 4px 18px;

    .item-name{
      font-size: 15px;
      line-height: 1.4;
      font-weight: 800;
    }
    .item-creator{
      font-size: 12.5px;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.6);
    }
    .rating-star-val{
      margin-bottom: 5px;
      font-size: 14px;
      font-weight: 800;
      color: #b4690e;
      margin-right: 6px;
    }
    .rating-count{
      font-size: 12.5px;
      margin-left: 3px;
      font-weight: 500;
      opacity: 0.8;
    }
  }

  .item-btns{
    justify-self: flex-start;
    padding: 4px 8px 30px 18px;
    margin-top: auto;
    .item-btn{
      font-size: 15px;
      display: inline-block;
      padding: 6px 16px;
      font-weight: 700;
      transition: var(--transition);
      white-space: nowrap;

      &.see-details-btn{
        background-color: transparent;
        border: 1px solid var(--clr-lightgrey);
        margin-right: 5px;
        
      &:hover{
        background-color: #3FB1B5;
        color: var(--clr-white);
      }
      }


        &:hover{
          background-color: transparent;
          color: rgba(0, 0, 0, 0.9);
        }
      }
    }
  }
`;

export default Course