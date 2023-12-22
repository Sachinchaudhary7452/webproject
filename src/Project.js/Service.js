import React from 'react';
import styled from 'styled-components';
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";

import { DiCodeigniter } from "react-icons/di";
const Wrapper = styled.div`
    max-width: 120rem;
    margin: 50px;
`;

const Grid = styled.div`
    display: grid;
    gap: 9rem;
    grid-template-columns: repeat(3, 1fr);
`;

const Box = styled.div`
    background-color: #F0FFFF;
    padding: 50px;
    border-radius: 8px;
`;

const IconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color:blue;

   
    
`;

const TextWrapper = styled.div`
    text-align: center;
`;


// ........................SECOND BOX..........................





const Service = () => {
    return (
        <Wrapper>
            <div className='container'>
                <Grid>
                    <div className='Service-section'>

                    {/* FIRST BOX */}
                        <Box>
                            <IconWrapper>
                                <TbTruckDelivery className='section' />
                            </IconWrapper>
                            <TextWrapper>
                                <p>Super Fast Free Delivery</p>
                            </TextWrapper>
                        </Box>
                    </div>

                  
                    {/* SECOND BOX */}

                    <Box>
                            <IconWrapper>
                                <MdSecurity className='section' />
                            </IconWrapper>
                            <TextWrapper>
                                <h6>Non-Contact-Shiping</h6>
                            </TextWrapper>
                        </Box>

                 


                    {/* THIRD BOX */}

                    <Box>
                            <IconWrapper>
                                <DiCodeigniter className='section' />
                            </IconWrapper>
                            <TextWrapper>
                                <p>Super-Secure payments </p>
                            </TextWrapper>
                        </Box>

                   


                </Grid>
            </div>
        </Wrapper>
    );
};

export default Service;








