import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import dbConfig from "../firebase";
import styled from "styled-components";
import Banner from "./Home/Banner";
import background from "../Components/images/background.png";
import Viewers from "./Home/Viewers";
import Original from "./Home/Original";
import Newtodisney from "./Home/Newtodisney";
import Trending from "./Home/Trending";
import Disneykids from "./Home/Disneykids";
import Hollywood from "./Home/Hollywood";
import Popular from "./Home/Popular";
import { setDisneyMovies } from "./Redux/Reducers/MovieReducer";

const Home = () => {
  const dispatch = useDispatch();
  let populars = [];
  let hollywoods = [];
  let newTos = [];
  let kidsTvs = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    dbConfig.collection("Movies").onSnapshot((snapshot) => {
      // console.log(snapshot);
      snapshot.docs.map((doc) => {
        // console.log(doc.data().type);
        switch (doc.data().type) {
          case "popular":
            populars = [...populars, { id: doc.id, ...doc.data() }];
            break;
          case "hollywood":
            hollywoods = [...hollywoods, { id: doc.id, ...doc.data() }];
            break;
          case "newTo":
            newTos = [...newTos, { id: doc.id, ...doc.data() }];
            break;
          case "kidsTv":
            kidsTvs = [...kidsTvs, { id: doc.id, ...doc.data() }];
            break;
          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;
          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;

          default:
            break;
        }
      });

      dispatch(
        setDisneyMovies({
          popular: populars,
          hollywood: hollywoods,
          newTo: newTos,
          kidsTv: kidsTvs,
          original: originals,
          trending: trending,
        })
      );
    });
  }, []);

  return (
    <>
      <Container>
        <Banner />
        <Viewers />
        <Original />
        <Newtodisney />
        <Trending />
        <Hollywood />
        <Disneykids />
        <Popular />
      </Container>
    </>
  );
};
const Container = styled.main`
  position: relative;
  /* height: calc(100vh - 250px); */
  padding: 0 calc(3.5vw + 5px);
  display: block;
  overflow-x: hidden;
  background: url(${background}) center/cover no-repeat;
`;
export default Home;
