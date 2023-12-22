import React,{useState} from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

 const Contact = () => {
    //Second WallPaper Css add //
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
       color:#4B0082; 
       font-family:"sofia";
    }
    .hero-section-data:hover {
       color:#FFA500;

    }

`;
    const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
    return (
        <>
        <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Technical
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}>
        
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${showMenu ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/home">
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

            <li className="nav-item">
              <a className="nav-link" href="./login">
               Login
              </a>
            </li>
            {/* <li className='nav-item'> 
              <button type="button" className="btn btn-primary"> Login</button>
            </li> */}
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

    {/* Second WallPaper */}

    
    <Wraper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p>Welcome to my new page.!</p>
            <h1>Science, Technology, and Math
</h1>
            <div className='section_language'>
            <p>
            Love Actually, everyone’s favorite British ensemble Christmas rom com, 
            came out exactly 20 years ago. Here’s a look at the couples who made the movie so special.
             
            </p>
            </div>

            <NavLink to="/home"> {/* Specify the correct route in the "to" prop */}
            <button type="button" class="btn btn-warning">Details view</button>
            </NavLink>
          </div>
          <div className='Herosection'>
            <img src='https://img.freepik.com/free-photo/metal-building-roof-structure_1127-2237.jpg?w=740&t=st=1699463297~exp=1699463897~hmac=050c49cf5bfcd62086b0f99a354eaee6eebf8f5fc21ead4a6a8060105061daa3' width= {"450px"}></img>
          </div>


        </div>
      </div>
    </Wraper>
            
            
        </>

    )
 }
  export default Contact;