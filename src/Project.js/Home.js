import React, { useState } from 'react';
import styled from 'styled-components';
//import { GlobalStyles } from './GlobalStyled';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { FiShoppingCart } from 'react-icons/fi';
import { MdFaceRetouchingNatural } from 'react-icons/md';




import HeroSection from './HeroSection'; 
import Service from './Service';
import Trusted from './Trusted';
import Foolish from './Foolish';
import { NavLink } from 'react-router-dom';
const Home = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const Wraper = styled.div`
  .navbar-brand {
       color:red;
       font-family:"sofia";
    }
    .navbar-brand:hover {
      color:#006400;
    }
  
  `;
  return (
     <>

<div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Wraper>
        <a className="navbar-brand" href="#">
          Technical
        </a>
        </Wraper>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}>
        
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${showMenu ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                Product
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                about
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
               Contact
              </a>
            </li>

            
           
             <li className='nav-item'> 
             <NavLink to = "./login">
              <button type="button" className="btn btn-primary"> Login</button>
              </NavLink>
            </li> 
            
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
    </div>

    
   <HeroSection></HeroSection>
     <Service></Service>
     <Trusted></Trusted>
   <Foolish></Foolish>
   
  
   
       
     </>  
  );
};

export default Home;
