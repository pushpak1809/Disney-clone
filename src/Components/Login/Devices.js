import React from "react";
import img1 from "../images/Laptop.png";
import img2 from "../images/TV.png";
import img3 from "../images/mobile.png";
import img4 from "../images/XBOX.png";
import styled from "styled-components";
const Devices = () => {
  const API = [
    { imgSrc: img1, title: "TV" },
    { imgSrc: img2, title: "Laptop" },
    { imgSrc: img3, title: "Mobile" },
    { imgSrc: img4, title: "XBOX" },
  ];

  return (
    <>
      <Section>
        <Container>
          <Title>
            <h1 className="disney-titles">
              AVAILABLE ON YOUR FAVOURITE DEVICES
            </h1>
          </Title>
          <Gridimg>
            {API &&
              API.map((img, index) => (
                <Image key={index}>
                  <img src={img.imgSrc} alt="" />
                  <h2>{img.title}</h2>
                </Image>
              ))}
          </Gridimg>
        </Container>
      </Section>
    </>
  );
};

const Section = styled.div`
  padding: 3vh 0 0vh 0;
  position: relative;
`;
const Container = styled.div`
  width: 95%;
  margin: 0 auto;
`;
const Title = styled.div`
  text-align: center;
  margin: 0 0 4vh 0;
`;
const Gridimg = styled.div`
  display: grid;
  gap: 10px 15px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media screen and (min-width: 280px) and (max-width: 767px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
const Image = styled.div`
  width: 100%;
  text-align: center;
  padding: 0 0 0 0;
  border-radius: 4px;
  @media screen and (min-width: 768px) and (max-width: 991px) {
    width: 100%;
  }

  img {
    width: 100%;
    height: 115px;
    object-fit: contain;

    @media screen and (min-width: 768px) and (max-width: 991px) {
      height: 85px;
    }
    @media screen and (min-width: 550px) and (max-width: 767px) {
      height: 75px;
    }
    @media screen and (min-width: 280px) and (max-width: 550px) {
      height: 55px;
    }
  }

  h2 {
    font-weight: 500 !important;

    @media screen and (min-width: 280px) and (max-width: 550px) {
      font-size: 0.9rem;
    }
  }
`;

export default Devices;
