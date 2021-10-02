import React from "react";
import logo from "../images/logo.png";
import styled from "styled-components";
const Footer = () => {
  return (
    <>
      <Section>
        <Container>
          <Footerbrand>
            <img src={logo} alt="disney/logo" />
          </Footerbrand>
          <Nav>
            <li>
              <p>ENGLISH</p>
            </li>
            <li>
              <p>SUBSCRIBER AGREEMENT</p>
            </li>
            <li>
              <p>PRIVACY POLICY</p>
            </li>
            <li>
              <p>YOUR CALIFORNIA PRIVACY</p>
            </li>
            <li>
              <p>DO NOT SELL MY INFO</p>
            </li>
            <li>
              <p>CHILDREN'S ONLINE PRIVACY POLICY</p>
            </li>
            <li>
              <p>CLOSED CAPTIONING</p>
            </li>
            <li>
              <p>INTEREST-BASED-ADS</p>
            </li>
            <li>
              <p>SUPPORTED DEVICES</p>
            </li>
            <li>
              <p>HELP</p>
            </li>
            <li>
              <p>GIFT DISNEY+</p>
            </li>
            <li>
              <p>ABOUT US</p>
            </li>
            <li>
              <p>DISNEY+ PARTNER PROGRAM</p>
            </li>
            <li>
              <p>PREMIER ACCESS</p>
            </li>
            <li>
              <p>THE DISNEY BUNDLE</p>
            </li>
          </Nav>
          <Copy>
            <p>© DisneyPlus. All Rights Reserved 2021</p>
            <p>Designed by PUSHPAK🤫</p>
          </Copy>
        </Container>
      </Section>
    </>
  );
};

const Section = styled.section`
  padding: 2rem 0;
  margin-bottom: 0;

  @media screen and (max-width: 550px) {
    padding: 1rem 0;
  }
`;
const Container = styled.div`
  width: 95%;
  margin: 0 auto;
`;
const Footerbrand = styled.div`
  text-align: center;
  img {
    width: 10rem;
    height: auto;
    object-fit: fill;

    @media screen and (max-width: 550px) {
      width: 7rem;
    }
  }
`;
const Nav = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  flex-shrink: 0;
  flex-grow: initial;
  justify-content: center;

  li {
    list-style: none;

    p {
      padding: 0.5rem;
      font-size: 0.9rem;
      margin-right: 0.3rem;

      @media screen and (max-width: 550px) {
        font-size: 0.75rem;
        padding: 0.1rem;
      }
    }
  }
`;

const Copy = styled.div`
  text-align: center;
  margin-top: 1vh;
  p {
    font-weight: 400 !important;
    @media screen and (max-width: 550px) {
      font-size: 0.95rem;
    }
  }
`;
export default Footer;
