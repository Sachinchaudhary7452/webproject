import React from 'react'
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import styled from 'styled-components';



const ErrorPage = () =>  {
  const Wraper = styled.section`
  .container {
     width:500px; 
     ${'' /* height:620px;   */}
    text-align: center;
    scroll-bar: none;
    
  }
 
  
  `;
  return (
    <>
    <Wraper>
     <div className='container'>
      <h1>404</h1>
      
       <h3>Oops! Page not found.</h3>
      <p>The HTTP 404 Not Found response status code indicates that the 
      server cannot find the requested resource. Links that lead to a 404 page are 
      often called broken or dead links and can be subject to link rot.
      </p> 
   
      <div className='btn'>
      <NavLink to = '/home'>
      <button type="button"  class="btn btn-primary">Bact to Home</button>
      </NavLink>
      </div>
      
    </div> 
    </Wraper>
   </>
  );
};

export default ErrorPage;