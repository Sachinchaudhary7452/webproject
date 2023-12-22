import React from 'react';
import { useAppContext } from './Productcontext';
import {  BiRupee  } from "react-icons/bi";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Contact from './Contact';
import HeroSection from './HeroSection'; 
import Service from './Service';
import Trusted from './Trusted';
import Foolish from './Foolish';
import styled from 'styled-components';

const About = () => {
  const { myname } = useAppContext();


  // Use Css
  const Wraper = styled.div`
  .container {
    display: flex;
    justify-content: center;
    text-Align: center;
    color:black;
    background-color: #F0FFFF;
   
  }
  `;
   
  const Nav = styled.div`
    .card-title {
      color:blue;
      animation:lightGlow 1.5s infinite alternate;

    }
    @keyframes lightGlow {
            0% {
                color:#D2691E;
            }
            50% {
              color:blue;
                
            }
            100% {
              color:#FF4500;
            }
        }  
         
  
  `;

  return (
    <React.Fragment>
     <Contact></Contact>
   {/* <HeroSection></HeroSection> */}
     <Service></Service>
     <Wraper>
      <div className='container'>
      <p>Trusted company Product and Good Features</p>
     </div>
 </Wraper>

<Nav>
<div className="row row-cols-1 row-cols-md-4 g-4">
  <div className="col">
    <div class="card h-100">
      <img src="https://m.media-amazon.com/images/I/71qYI+RGdcL._SL1500_.jpg" class="card-img-top" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title">Hp Laptop</h5>
       
       <p className="card-text">HP Laptop 15s, 11th Gen Intel Core i3-1115G4, 15.6-inch (39.6 cm), FHD, 8GB DDR4, 512GB SSD, Intel UHD Graphics, Thin & Light, Dual Speakers (Win 11, MSO 2021, Silver, 1.69 kg), fq2673TU</p>
       <BiRupee className='section'/>
        <h5>45,000</h5>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="https://m.media-amazon.com/images/I/71jI0AcBRjL._SL1500_.jpg" class="card-img-top" alt="..."></img>
      
      <div className="card-body">
        <h5 className="card-title">Dell Laptop</h5>
        <p className="card-text">Dell 15 Laptop, Intel Core i5-1135G7 Processor/16GB DDR4/512GB SSD/Intel UHD Graphic/15.6" (39.562cm) FHD/Win 11 + MSO'21/Thin & Light 1.69kg/15 Month McAfee/Spill-Resistant Keyboard/Carbon Color</p>
        <BiRupee className='section'/>
        <h5>60,000</h5>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://m.media-amazon.com/images/I/71tGjGxis6L._SL1500_.jpg" class="card-img-top" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">Asus Laptop</h5>
        <p class="card-text">ASUS [SmartChoice] Vivobook 15, Intel Celeron N4020, 15.6" (39.62 cms) HD, Thin and Light Laptop (8GB/512GB SSD/Integrated Graphics/Windows 11/Office 2024</p>
        <BiRupee className='section'/>
        <h5>40,000</h5>
      </div>
    </div>
  </div>
  <div className="col">
    <div class="card h-100">
      <img src="https://m.media-amazon.com/images/I/61UCT7A0vsL._SL1500_.jpg" className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title">Macbook Laptop</h5>
        <p className="card-text">iCasso for MacBook Air 13 Inch Case 2018 2019 2020 Release A2337 M1/A1932/A2179 (New for MacBook air A2337M1/ A1932/A2179, Dark Green)</p>
        <BiRupee className='section'/>
        <h5>90,000</h5>
      </div>
    </div>
  </div>
  <div className="col">
    <div class="card h-100">
      <img src="https://m.media-amazon.com/images/I/715vnqRA08L._SL1500_.jpg" className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title">Redmi Tab</h5>
        <p className="card-text">
            Redmi Pad | MediaTek Helio G99 | 26.95cm (10.61 inch) 2K Resolution & 90Hz Refresh Rate Display | 4GB RAM & 128GB Storage, Expandable up to 1TB |</p>
            <BiRupee className='section'/>
        <h5>19,000</h5>
      </div>
    </div>
  </div>
  <div className="col">
    <div class="card h-100">
      <img src="https://m.media-amazon.com/images/I/81dT7CUY6GL._SL1500_.jpg" className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title">i phone</h5>
        <p className="card-text">
               Apple iPhone 15 Pro Max (256 GB) - Natural Titanium</p>
               <BiRupee className='section'/>
        <h5>54,000</h5>
      </div>
    </div>
  </div>
  <div className="col">
    <div class="card h-100">
      <img src="https://m.media-amazon.com/images/I/71XBcl6bNjL._SL1500_.jpg" className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title">Watch</h5>
        <p className="card-text">         
Apple Watch SE (2nd Gen) [GPS 44 mm] Smart Watch w/Starlight Aluminium Case & Starllight Sport Band. Fitness & Sleep Tracker, Crash Detection, Heart</p>
<BiRupee className='section'/>
        <h5>2500</h5>
      </div>
    </div>
  </div>
  <div className="col">
    <div class="card h-100">
      <img src="https://m.media-amazon.com/images/I/61v2fXcBufL._SL1500_.jpg" className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title">Ear Buds</h5>
        <p className="card-text">         

        Boult Audio Z60 Truly Wireless in Ear Earbuds with 60H Playtime, 4 Mics ENC Clear Calling, 50ms Low Latency Gaming, 13mm Bass Driver, Type-C Fast Charging,</p>
        <BiRupee className='section'/>
        <h5>1100</h5>
      </div>
    </div>
  </div>
  <div className="col">
    <div class="card h-100">
      <img src="https://m.media-amazon.com/images/I/61SzOiLaXhL._SL1500_.jpg" className="card-img-top" alt="..."></img>
      <div className="card-body">
      <ul>
        <li> <a href=''> Show Details </a> </li>
      </ul>
      </div>
    </div>
  </div>
  <div className="col">
    <div class="card h-70">
      <img src= "https://m.media-amazon.com/images/I/41kH7QfPnOL._SL1000_.jpg"></img>
      <div className="card-body">
      <ul>
        <li> <a href='/singleProduct'> Show Details </a> </li>
      </ul>
      </div>
    </div>
  </div>
  <div className="col">
    <div class="card h-70">
      <img src= "https://m.media-amazon.com/images/I/51Jmr4FOsdL._SL1000_.jpg"></img>
      <div className="card-body">
      <ul>
        <li> <a href=''> Show Details </a> </li>
      </ul>
      </div>
    </div>
  </div>
  <div className="col">
    <div class="card h-70">
      <img src= "https://m.media-amazon.com/images/I/61febH0ZdWL._SL1500_.jpg"></img>
      <div className="card-body">
      <ul>
        <li> <a href=''> Show Details </a> </li>
      </ul>
     
      </div>
    </div>
  </div>
</div>
</Nav>




 

     

     
      
      

      
   
     <Trusted></Trusted>
   <Foolish></Foolish>
    </React.Fragment>
    
  );
};

export default About;
