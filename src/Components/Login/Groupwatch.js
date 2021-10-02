import React from "react";
import styled from "styled-components";
import bgImg from "../images/Soul_Groupwatch.jpg";
const Groupwatch = () => {
  return (
    <>
      <Section>
        <Container>
          <Content>
            <h1 className="disney-titles">VIRTUAL MOVIE NIGHTS</h1>
            {/* <h1 className="disney-titles">YOUR FAVOURITE GROUP</h1> */}
            <li> Watch together,even when apart</li>
            <li>Stream with upto 6 friends </li>
            <li> Pause, rewind, enjoy together</li>
            <li> Easy setup and Sharing</li>
          </Content>
        </Container>
      </Section>
    </>
  );
};

const Section = styled.section`
  background: url(${bgImg}) center/cover no-repeat;
  height: 71vh;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 768px) and (max-width: 1200px) {
    height: 61vh;
  }
  @media screen and (min-width: 280px) and (max-width: 767px) {
    height: 55vh;
  }
`;
const Container = styled.div`
  margin: 0 auto;
  width: 91%;

  @media screen and (min-width: 280px) and (max-width: 767px) {
    width: 85%;
  }
`;
const Content = styled.div`
  margin-top: 17vh;

  @media screen and (min-width: 280px) and (max-width: 1200px) {
    margin-top: 13vh;
  }

  li {
    font-size: 1rem;
    font-weight: 300;
    @media screen and (min-width: 280px) and (max-width: 767px) {
      font-size: 0.75rem;
    }
  }
`;

export default Groupwatch;
