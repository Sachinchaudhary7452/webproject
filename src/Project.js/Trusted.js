import React from "react";
import styled from "styled-components";
import { DiAndroid } from "react-icons/di";

const Wrapper = styled.div`
    margin: 0;
    padding: 0;
    width: 1050px;
    height: 200px;
    background-color: #F0FFFF;
    flex-direction:column;
    
`;

const Section = styled.div`
    text-align: center;
    padding: 15px;
`;

const Symbol = styled.div`
    display: flex;
    justify-content: space-between;
    width: 400px;
    margin-left: 150px; 
    background-color: #F0FFFF; 
    padding: 5px; 
    Text-align:center;
   

    
`;



const Trusted = () => {
    return (
        <React.Fragment>
            <Wrapper>
                <div className="container">
                    <Section>
                        <div className="Trusted">
                            <Section>
                                <div className="Section_new">
                                    <h6>Trusted your Company  Good Quality  +1000 </h6>
                                </div>
                            </Section>
                            <Symbol>
                            <img src="https://www.dimakhconsultants.com/img/web-design/logo-design/logos/covid-kavach-logo.jpg" width="120px" alt="Your Image" />
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLj6wmR9eqcU6bKv0mmhod2LRwGF7vgzZpMw&usqp=CAU" width="120px" alt="Your Image" />
                                <img src="https://i.pinimg.com/474x/c5/ae/e8/c5aee8bb91a7580436cffc2be7b102d7.jpg" width="120px" alt="Your Image" />
                                <img src="https://play-lh.googleusercontent.com/ew_0j-a7XmvM-A5gKdT4qXY1TP7xYe6fGvP8iWo3rs_M-sc9LrmDGqjWms4-2HZdU9Q=w3840-h2160-rw" width="120px" alt="Your Image" />
                                {/* <img src="https://www.dimakhconsultants.com/img/web-design/logo-design/logos/covid-kavach-logo.jpg" width="120px" alt="Your Image" /> */}
                            </Symbol>
                        </div>
                    </Section>
                </div>
            </Wrapper>
        </React.Fragment>
    );
};

export default Trusted;
