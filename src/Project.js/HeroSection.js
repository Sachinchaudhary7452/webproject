import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { GlobalStyles } from './GlobalStyled';
import 'bootstrap/dist/css/bootstrap.min.css';

const Wraper = styled.div`
  .container {
    max-width: 120rem;
    margin: 50px;
  }

  .grid {
    display: grid;
    gap: 9rem;
  }

  .grid-two-column {
    grid-template-columns: repeat(2, 1fr);
  }
  .Herosection {
    width: 600px;
    hight: 300px;
  }
  .hero-section-data {
    font-family:"Trirong";
  }
  .subh {
    color:blue;
  }
  .subh:hover {
    color:#FF4500;
  }
`;

const HeroSection = () => {
  return (
    <Wraper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
          <p>Welcome to my website</p>
          <div className='subh'>
            
            <h1>Mr Sachin.Chaudhary</h1>
            </div>
            <p>
              If you're looking for positive quotes and uplifting sayings to boost your mood, these 100 stay positive
              quotes will help you look on the bright side—even when your day starts out on the totally wrong foot. 
            </p>

            <NavLink to="/cart"> {/* Specify the correct route in the "to" prop */}
              <button type="button" className="btn btn-primary">
                Show now
              </button>
            </NavLink>
          </div>
          <div className='Herosection'>
            <img src='https://watermark.lovepik.com/photo/20211124/large/lovepik-young-womens-shopping-mall-shopping-rest-and-picture_500945629.jpg' width= {"500px"}></img>
          </div>


        </div>
      </div>
    </Wraper>
  );
};

export default HeroSection;
