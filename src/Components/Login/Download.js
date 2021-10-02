import React from "react";
import styled from "styled-components";
import Devices from "../images/Devices.png";
const Download = () => {
  return (
    <>
      <Section>
        <Container>
          <Textinfo>
            <h1 className="disney-titles">
              DOWNLOAD THE APP NOW AND EXPLORE MORE ON DISNEY+
            </h1>
            <p>
              Stream on various devices simultaneously and enjoy the content
              with your family and friends.
            </p>
          </Textinfo>
          <Imginfo>
            <img src={Devices} alt="" />
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
  flex-direction: row;
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
    max-width: 600px;
    height: auto;

    @media screen and (min-width: 500px) and (max-width: 1200px) {
      height: auto;
      object-fit: contain;
      width: 100%;
      margin-top: 3vh;
    }
    @media screen and (min-width: 280px) and (max-width: 500px) {
      height: 25vh;
      object-fit: contain;
      width: 100%;
      margin-top: 3vh;
    }
  }
`;

export default Download;
