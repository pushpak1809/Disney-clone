import React from "react";
import img9 from "../images/ForkyAsksAQuestion_en-US.jpg";
import img8 from "../images/TS4.jpg";
import img4 from "../images/moana-poster-4-2.png";
import img1 from "../images/Poster_InfinityWar_EN.jpg";
import img2 from "../images/Disney_MLP_GridItem_SWRiseofSkywalker.jpg";
import img7 from "../images/Soul_EN_(1).png";
import img3 from "../images/LUCA-2.png";
import img5 from "../images/SW_Clone_Wars.png";
import img6 from "../images/Mickey_Mouse_Clubhouse_Grid_Item_052820.jpg";
import styled from "styled-components";
const Grid = () => {
  const API_IMG = [
    { imgSrc: img1 },
    { imgSrc: img2 },
    { imgSrc: img3 },
    { imgSrc: img4 },
    { imgSrc: img5 },
    { imgSrc: img6 },
    { imgSrc: img7 },
    { imgSrc: img8 },
    { imgSrc: img9 },
  ];

  return (
    <>
      <Section>
        <Container>
          <Title>
            <h1 className="disney-titles">
              STREAM EXCLUSIVE DISNEY+ ORIGINALS
            </h1>
            <p>New Stories from our Incredible Family of Studios</p>
          </Title>
          <Gridimg>
            {API_IMG &&
              API_IMG.map((value, index) => (
                <Image key={index}>
                  <img src={value.imgSrc} alt="" />
                </Image>
              ))}
          </Gridimg>
        </Container>
      </Section>
    </>
  );
};

const Section = styled.section`
  padding: 5vh 0;
  position: relative;
`;
const Container = styled.div`
  width: 95%;
  margin: 0 auto;
`;
const Title = styled.div`
  text-align: center;
  margin-bottom: 5vh;
  margin-top: 5vh;

  p {
    font-size: 1rem;

    @media screen and (max-width: 550px) {
      font-size: 0.8rem;
    }
  }
`;
const Gridimg = styled.div`
  display: grid;
  gap: 10px 15px;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media screen and (max-width: 991px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
const Image = styled.div`
  width: 100%;
  padding: 0;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;

  img {
    border-radius: 10px;
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

export default Grid;
