import React from "react";
import styled from "styled-components";
import imgStream from "../images/spiderman1.png";
const Stream = () => {
  return (
    <>
      <Section>
        <Container>
          <Textinfo>
            <h1 className="disney-titles">SPIDER-MAN NO WAY HOME</h1>
            <p>
              Get Premium Access to Marvel Studios Spider-Man No Way Home on
              December 17.
            </p>
          </Textinfo>
          <Imginfo>
            <img src={imgStream} alt="" />
          </Imginfo>
        </Container>
      </Section>
    </>
  );
};

const Section = styled.section`
  padding: 50px 5%;
  position: relative;
  background: transparent;

  @media screen and (max-width: 991px) {
    padding: 35px 50px;
  }
  @media screen and (max-width: 767px) {
    padding: 25px;
  }
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: space-between;

  @media screen and (max-width: 991px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
`;
const Textinfo = styled.div`
  width: 48%;
  flex: 0 auto;
  opacity: 1;
  z-index: 1500;
  position: relative;

  @media screen and (max-width: 991px) {
    width: 100%;
    padding: 0;
  }

  p {
    font-size: 1rem;
    font-weight: 100;

    @media screen and (min-width: 375px) and (max-width: 550px) {
      font-size: 0.85rem;
      line-height: 1rem;
    }
    @media screen and (min-width: 280px) and (max-width: 375px) {
      font-size: 0.7rem;
      line-height: 1rem;
      margin-top: 1vh;
    }
  }
`;
const Imginfo = styled.div`
  width: 48%;
  flex: 0 auto;
  opacity: 1;
  z-index: 1500;
  position: relative;

  @media screen and (max-width: 991px) {
    width: 100%;
    padding: 0;
  }

  img {
    width: 100%;
    border-radius: 10px;
    max-width: 600px;
    height: auto;

    @media screen and (min-width: 500px) and (max-width: 1200px) {
      height: auto;
      object-fit: contain;
      border-radius: 10px;
      width: 100%;
    }
    @media screen and (min-width: 280px) and (max-width: 500px) {
      height: 31vh;
      margin-top: 1.5vh;
      object-fit: contain;
      border-radius: 10px;
      width: 100%;
    }
  }
`;

export default Stream;
