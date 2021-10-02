import React from "react";
import styled from "styled-components";
import Banner from "./Login/Banner";
import Devices from "./Login/Devices";
import Download from "./Login/Download";
import Grid from "./Login/Grid";
import Groupwatch from "./Login/Groupwatch";
import Stream from "./Login/Stream";

const Login = () => {
  return (
    <>
      <Main>
        <Banner />
        <Stream />
        <Groupwatch />
        <Grid />
        <Download />
        <Devices />
      </Main>
    </>
  );
};

export default Login;

const Main = styled.main``;
