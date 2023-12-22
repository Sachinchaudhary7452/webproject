import React from "react";
import styled from "styled-components";

const Login = () => {
  const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    ${'' /* height: 100vh; */}
    background-color:		#F0FFFF;
  `;

  const Card = styled.div`
    width: 300px;
    padding: 20px;
    border-radius: 8px;
    background-color: #ffffff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  `;

  const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
  `;

  const Input = styled.input`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  `;

  const Button = styled.button`
    padding: 10px;
    background-color: #368bc1;
    color: #ffffff;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #1f5f7a;
    }
  `;

  return (

<>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57100.083355262985!2d79.2777649114615!3d26.560130800848768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39761cc21a454c9b%3A0x386925c945aa71ac!2sBabarpur%2C%20Uttar%20Pradesh%20206121!5e0!3m2!1sen!2sin!4v1698739837393!5m2!1sen!2sin" width="100%" height="230" Style={{border:0}} allowFullScreen="" loading="lazy"
     referrerPolicy="no-referrer-when-downgrade"></iframe>

    <CardContainer>
      <Card>
        <h2>Login</h2>
        <Form action="https://formspree.io/f/xzblwpkp" method="POST" className="contact-input">
          <Input type="email" placeholder="Email"  autoComplete="off"/>
          <Input type="password" placeholder="Password"  autoComplete="off"/>
          <textarea name = "Message" cols= "30" row ="6" placeholder="Enter Your Message"></textarea>
          <Button type="sumbit">Login</Button>
        </Form>
      </Card>
    </CardContainer>
    </>
  
  );
};

export default Login;
