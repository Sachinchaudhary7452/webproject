import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Cart = () => {
  // Use the Css //
  const Wraper = styled.div`
    .navbar-brand {
      color: red;
    }
  `;

  // UseToggle system //
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // Use the fetch Api //
  const URL_DOM = "https://dummyjson.com/products";
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch(URL_DOM);
      const data = await res.json();
      if (data && data.products) {
        setProducts(data.products);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
              onClick={toggleMenu}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`collapse navbar-collapse ${
                showMenu ? 'show' : ''
              }`}
              id="navbarSupportedContent"
            >
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
              </ul>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>

      {/* Use the Api */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <h4
          style={{
            color: 'blue',
            fontSize: '20px',
            textAlign: 'center',
            marginBottom: '20px',
            width: '100%',
          }}
        >
          
        </h4>
        {products.map((prod) => (
          <div key={prod.id} style={{ margin: '30px', width: '250px', display: 'flex', flexDirection: 'column' }}>
            <img
              src={prod.thumbnail}
              alt={prod.title}
              style={{
                width: '100%',
                height: '250px',
                borderRadius: '5px',
                marginBottom: '10px',
              }}
            />
            <p style={{ fontSize: '18px', fontWeight: 'bold', textAlign: 'center', color:'red' }}>
              {prod.title}
            </p>
            

          </div>
        ))}
      </div>
    </>
  );
};

export default Cart;
