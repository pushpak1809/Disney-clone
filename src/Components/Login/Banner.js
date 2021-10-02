import React from "react";
import styled from "styled-components";
import logo1 from "../images/cta-logo-one.svg";
import logo2 from "../images/cta-logo-two.png";
import loginimg from "../images/login-background.jpg";
const Banner = () => {
  return (
    <>
      <Background>
        <Container>
          <Content>
            <img src={logo1} alt="" />
            <button type="button" className="get-the-leisure">
              GET THE LEISURE
            </button>
            <h4>Percieve your pleasure by Subscribing.</h4>
            <img src={logo2} alt="" />

            {/* <button type="button" className="links">
              SIGN UP FOR DISNEY+ ONLY
            </button>
            <button type="button" className="links text-gary">
              $7.99/month or $79.99/year
            </button> */}
          </Content>
        </Container>
      </Background>
    </>
  );
};

const Background = styled.section`
  background-image: url(${loginimg});
  /* background-image: linear-gradient(to top, rgba(239,239,239,255), rgba(239,239,239,0)); */
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media screen and(min-width:768px) and (max-width: 1200px) {
    height: 85vh;
  }
  @media screen and(min-width:280px) and (max-width: 767px) {
    height: 75vh;
  }
`;
const Container = styled.div`
  width: 85%;
  margin: 0 auto;
`;
const Content = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 650px;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media screen and(min-width:768px) and (max-width: 1200px) {
    max-width: 550px;
  }
  @media screen and(min-width:550px) and (max-width: 767px) {
    max-width: 550px;
    margin-top: 13vh;
  }
  @media screen and(min-width:375px) and (max-width: 550px) {
    max-width: 550px;
    margin-top: 13vh;
  }
  @media screen and(min-width:280px) and (max-width: 375px) {
    max-width: auto;
    margin-top: 13vh;
  }

  h4 {
    margin: 2vh 0;
    color: #f9f9f9;
    text-transform: uppercase;
  }

  img {
    width: 100%;
    height: auto;
    display: block;
    max-width: 600px;
    object-fit: contain;
    margin-bottom: 1vh;
  }

  > .get-the-leisure {
    cursor: pointer;
    outline: none;
    border: none;
    width: 100%;
    padding: 11.5px 15px;
    align-items: center;
    text-align: center;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    background: #0063e5;
    color: #f9f9f9;
    font-size: 18px;
    border-radius: 10px;
    transition: all 0.7s ease-in-out;
    font-weight: bold;

    @media screen and(min-width:550px) and (max-width: 1200px) {
      padding: 10px 0;
      font-size: 15px;
    }
    @media screen and(min-width:280px) and (max-width: 550px) {
      padding: 5px 0;
      font-size: 14px;
    }

    &:hover {
      background: blue;
    }
  }

  > .links {
    outline: none;
    border: none;
    font-size: 19px;
    background: transparent;
    color: #f9f9f9;
    margin-top: 1vh;

    @media screen and(min-width:280px) and (max-width: 375px) {
      font-size: 15px;
    }
  }
  > .text-gary {
    color: gray;
  }
`;

export default Banner;
