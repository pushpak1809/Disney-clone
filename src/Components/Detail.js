import React, { useState, useEffect } from "react";
import styled from "styled-components";
import play from "../Components/images/play-icon-black.png";
import trailer from "../Components/images/play-icon-white.png";
import group from "../Components/images/group-icon.png";
import { useParams } from "react-router-dom";
import dbConfig from "../firebase";

const Detail = () => {
  const { id } = useParams();
  const [State, setstate] = useState();
  useEffect(() => {
    dbConfig
      .collection("Movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setstate(doc.data());
        } else {
          console.log("no such document in firebase 🔥");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [id]);

  return (
    <>
      {State && (
        <>
          <Container>
            <Background>
              <img src={State.BackgroundImg} alt="" />
            </Background>
            <Imagetitle>
              <img src={State.TitleImg} alt="" />
            </Imagetitle>
            <Controls>
              <Playbutton>
                <img src={play} alt="" />
                <span>PLAY</span>
              </Playbutton>
              <Trailerbutton>
                <img src={trailer} alt="" />
                <span>TRAILER</span>
              </Trailerbutton>
              <Addbutton>
                <span>+</span>
              </Addbutton>
              <Groupbutton>
                <img src={group} alt="" />
              </Groupbutton>
            </Controls>
            <Subtitle>{State.Genres}</Subtitle>
            <Description>{State.Description}</Description>
          </Container>
        </>
      )}
    </>
  );
};

export default Detail;

const Container = styled.div`
  min-height: 85vh;
  padding: 0 calc(3.5vw + 5px);
  position: relative;

  @media screen and (min-width: 991px) and (max-width: 1200px) {
    min-height: 72vh;
  }
  @media screen and (min-width: 550px) and (max-width: 991px) {
    min-height: 65vh;
  }
  @media screen and (min-width: 280px) and (max-width: 500px) {
    min-height: 55vh;
    object-fit: fill;
  }
`;

const Background = styled.div`
  position: fixed;

  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Imagetitle = styled.div`
  height: 30vh;
  width: 35vw;
  min-height: 170px;
  min-width: 200px;
  /* margin-top: 30px; */
  margin-bottom: 20px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  /* @media screen and (min-width: 991px) and (max-width: 1200px) {
    min-height: 325px;
  }
  @media screen and (min-width: 550px) and (max-width: 991px) {
    min-height: 250px;
  }
  @media screen and (min-width: 280px) and (max-width: 500px) {
    min-height: 150px;
  } */
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;
const Playbutton = styled.button`
  border-radius: 5px;
  font-size: 15px;
  display: flex;
  align-items: center;
  height: 56px;
  background: rgb(249, 249, 249);
  border: none;
  outline: none;
  padding: 0px 24px;
  margin-right: 22px;
  letter-spacing: 1.8px;
  cursor: pointer;
  &:hover {
    background: rgb(198, 198, 198);
  }
`;
const Trailerbutton = styled(Playbutton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: uppercase;
`;
const Addbutton = styled.button`
  width: 44px;
  margin-right: 16px;
  height: 44px;
  display: flex;
  border-radius: 50%;
  outline: none;
  border: 1px solid rgb(249, 249, 249);
  background: rgba(0, 0, 0, 0.3);
  align-items: center;
  justify-content: center;
  cursor: pointer;
  span {
    margin-top: 5px;
    font-size: 30px;
    color: whitesmoke;
  }
`;
const Groupbutton = styled(Addbutton)`
  background: rgba(0, 0, 0, 0.6);
`;

const Subtitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 28px;
  margin-top: 26px;
`;
const Description = styled.div`
  line-height: 1.3;
  font-size: 20px;
  margin-top: 16px;
  margin-bottom: 50px;
  color: rgb(249, 249, 249);
  max-width: 800px;
`;
