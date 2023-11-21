import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';

const Navbar = () => {

 return (
    <NavbarWrapper className = "bg-white flex">
      <div className='container w-100'>
        <div className='brand-and-toggler flex flex-between w-100'>
          <Link to = "/" className='navbar-brand text-uppercase ls-1 fw-8'>
            <span></span>Kurz.io
          </Link>

          <div className='navbar-btns flex'>
            <Link to="/oprogram" className="nav-link">O programe</Link>
          
          
            <a href="https://europa.eu/europass/sk/nastroje-europass/test-your-digital-skills" className="nav-link" target="_blank" rel="noopener noreferrer">Test</a> </div>
          </div>
      </div>
    </NavbarWrapper>
 )
}

const NavbarWrapper = styled.nav`
 height: 80px;
 box-shadow: rgba(50, 50, 93, 0.15) 0px 16px 12px -2px, rgba(0, 0, 0, 0.2) 0px 3px 7px -3px;

 .navbar-brand{
    font-size: 23px;
    span{
      color: var(--clr-orange);
    }
 }
 .cart-btn{
    margin-right: 18px;
    font-size: 23px;
    position: relative;
    .item-count-badge{
      background-color: var(--clr-orange);
      position: absolute;
      right: -10px;
      top: -10px;
      font-size: 12px;
      font-weight: 700;
      display: block;
      width: 23px;
      height: 23px;
      color: var(--clr-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
 }

 .sidebar-open-btn{
    transition: all 300ms ease-in-out;
    &:hover{
      opacity: 0.7;
    }
 }

 .nav-link{
    color: black;
    font-size: 18px;
    margin-right: 18px;
    transition: all 300ms ease-in-out;
    &:hover{
      color: var(--clr-orange);
    }
 }
`;

export default Navbar;