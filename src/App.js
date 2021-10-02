import React from "react";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Login/Footer";
import Home from "./Components/Home";
import Detail from "./Components/Detail";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/detail/:id" component={Detail}></Route>
          <Redirect to="/" />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
