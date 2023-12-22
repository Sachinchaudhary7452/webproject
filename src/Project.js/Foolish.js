import React from 'react';
import styled from 'styled-components';


const Foolish = () => {
    const Wraper = styled.div`
    background-color:		#48D1CC;
    color: 	white;
    
    
    `;



  return (
    <>
    <Wraper>
      <footer className="footer-section">
        <div className="container">
          <div className="footer-cta pt-5 pb-5">
            <div className="row">
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                  <i className="fas fa-map-marker-alt"></i>
                  <div className="cta-text">
                    <h4>Mr sachin.chaudhary</h4>
                    <span>kakadeo kanpur Uttar Pradesh</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                  <i className="fas fa-phone"></i>
                  <div className="cta-text">
                    <h4>Call us</h4>
                    <span>91-7452879507</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                  <i className="far fa-envelope-open"></i>
                  <div className="cta-text">
                    <h4>Mail us</h4>
                    <span>sachinrajraj076@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-content pt-5 pb-5">
            <div className="row">
              <div className="col-xl-4 col-lg-4 mb-50">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <a href="index.html"><img src="https://i.ibb.co/QDy827D/ak-logo.png" className="img-fluid" alt="logo"></img></a>
                  </div>
                  <div className="footer-text">
                    <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing elit,Lorem ipsum dolor sit amet.</p>
                  </div>
                  <div className="footer-social-icon">
                    <span>Follow us</span>
                    <a href="#"><i className="fab fa-facebook-f facebook-bg"></i></a>
                    <a href="#"><i className="fab fa-twitter twitter-bg"></i></a>
                    <a href="#"><i className="fab fa-google-plus-g google-bg"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Useful Links</h3>
                  </div>
                  <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="#">about</a></li>
                    <li><a href="#">services</a></li>
                    <li><a href="#">portfolio</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Our Services</a></li>
                    <li><a href="#">Expert Team</a></li>
                    <li><a href="#">Contact us</a></li>
                    <li><a href="https://news.google.com/">Latest News</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Subscribe</h3>
                  </div>
                  <div className="footer-text mb-25">
                    <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                  </div>
                  <div className="subscribe-form">
                    <form action="#">
                      <input type="text" placeholder="Email Address"></input>
                      <button><i className="fab fa-telegram-plane"></i></button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                <div className="copyright-text">
                  <p>Copyright &copy; 2023, All Right Reserved <a href="https://codepen.io/anupkumar92/">Chaudhary</a></p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                <div className="footer-menu">
                  <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="https://www.instagram.com/mr_sachin.chaudhary">Instagram</a></li>
                    <li><a href="https://www.facebook.com/Sachin Raj">facebook</a></li>
                    <li><a href="https://wa.me/9106962154">whatapp</a></li>
                    <li><a href="https://www.linkedin.com/in/Sachin Chaudhary">Linkedin</a></li>
                    
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      </Wraper>
    </>
  );
};

export default Foolish;
