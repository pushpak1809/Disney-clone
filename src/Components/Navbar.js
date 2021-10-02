import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import logo from "../Components/images/logo.svg";
import search from "../Components/images/search-icon.svg";
import watchlist from "../Components/images/watchlist-icon.svg";
import original from "../Components/images/original-icon.svg";
import movie from "../Components/images/movie-icon.svg";
import series from "../Components/images/series-icon.svg";
import shutdown from "../Components/images/shutdown.svg";
import { useSelector, useDispatch } from "react-redux";
import {
  SelectUserName,
  SelectUserPhoto,
  setLoginState,
  setLogoutState,
} from "./Redux/Reducers/UserReducer";
import { auth, provider } from "../firebase";

const Navbar = () => {
  const history = useHistory();
  const Username = useSelector(SelectUserName);
  const Userphoto = useSelector(SelectUserPhoto);
  const dispatch = useDispatch();

  const [toggler, settoggler] = useState(false); // false->notactivestate
  const ifpopup = () => settoggler(!toggler); //true-> activestate

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          setLoginState({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
        history.push("/home");
      }
    });
  }, [dispatch, history]);

  const signin = () => {
    // console.log("clicked");
    auth
      .signInWithPopup(provider)
      .then((response) => {
        // console.log(result);
        let user = response.user;
        dispatch(
          setLoginState({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
        history.push("/home"); //user will navigate to home
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signout = () => {
    auth.signOut().then(() => {
      dispatch(setLogoutState());
      history.push("/"); //this will navigate user to login screen
    });
  };
  return (
    <>
      <Nav>
        <Navbrand>
          <NavLink to="/home">
            <img src={logo} alt="" />
          </NavLink>
        </Navbrand>
        {!Username ? (
          <LoginButton onClick={signin}>LOGIN</LoginButton>
        ) : (
          <>
            <Menulink>
              <li>
                <NavLink to="#" className="nav-link">
                  <img src={search} alt="" />
                  <span>SEARCH</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="#" className="nav-link">
                  <img src={watchlist} alt="" /> <span>WATCHLIST</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="#" className="nav-link">
                  <img src={original} alt="" /> <span>ORIGINAL</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="#" className="nav-link">
                  <img src={movie} alt="" /> <span>MOVIES</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="#" className="nav-link">
                  <img src={series} alt="" /> <span>SERIES</span>
                </NavLink>
              </li>
            </Menulink>
            <Userauth onClick={ifpopup}>
              <img src={Userphoto} alt="" />
            </Userauth>
            <Popout activeState={toggler}>
              <li>
                <NavLink onClick={signout} to="" className="nav-link">
                  <img
                    style={{ width: "0.8rem", height: "0.8rem" }}
                    src={shutdown}
                    alt=""
                  />
                  <span>SIGNOUT</span>
                </NavLink>
              </li>
            </Popout>
          </>
        )}
      </Nav>
    </>
  );
};

const LoginButton = styled.button`
  cursor: pointer;
  padding: 5px 16px;
  border-radius: 5px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  border: 1.5px solid whitesmoke;
  transition: all 0.2s ease 0s;
  background-image: linear-gradient(45deg, yellow, yellowgreen);
  @media screen and (min-width: 280px) and (max-width: 550px) {
    font-size: 0.8rem;
    padding: 4px 13px;
  }
  &:hover {
    background-image: linear-gradient(-34deg, yellow, crimson);
    color: white;
    border-color: whitesmoke;
  }
`;

const Nav = styled.nav`
  background: transparent;
  /* height: 10px; */
  display: flex;
  min-height: 9vh;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 0 3rem;
`;
const Navbrand = styled.div`
  width: 90px;
  height: auto;
  object-position: center;

  img {
    margin-top: 5px;
    /* margin-top: 10px; */
    width: 100%;
    height: auto;
    object-fit: fill;
  }
`;
const Menulink = styled.div`
  @media screen and (min-width: 280px) and (max-width: 991px) {
    display: none;
  }

  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: row wrap;
  flex-shrink: 0;
  justify-content: flex-start;
  margin-right: auto;
  margin-left: 3rem;

  li {
    list-style: none;
    > .nav-link {
      display: flex;
      align-items: center;
      text-decoration: none;
      position: relative;
      img {
        width: 1.3rem;
        height: 1.3rem;
        object-fit: contain;
      }
      span {
        color: #fff;
        font-size: 1rem;
        font-weight: 300;
        letter-spacing: 1px;
        line-height: 1.08;
        padding: 0.5rem;
        margin-top: 5px;
        position: relative;

        &::before {
          position: absolute;
          content: "";
          top: 100%;
          right: 0;
          left: 0;
          width: 0%;
          height: 2px;
          background-image: linear-gradient(56deg, cyan, yellow);
          border-radius: 100px;
          transition: all 0.5s cubic-bezier(0.445, 0.05, 0.55, 0.95);
        }
      }
    }

    &:hover {
      span::before {
        width: 100%;
      }
    }
  }
`;
const Userauth = styled.div`
  cursor: pointer;
  width: 50px;
  object-position: center;
  height: 50px;
  position: relative;
  img {
    margin-top: 5px;
    margin-left: 40px;
    width: 80%;
    height: 80%;
    object-fit: cover;
    border-radius: 100px;
  }
`;

const Popout = styled.div`
  position: absolute;
  z-index: 100;
  top: 3vh;
  right: 3.7rem;
  /* top: 1.5rem; */
  padding: 0 0.5rem 0 0.5rem;
  background-image: linear-gradient(88deg, cyan, yellow);
  border-radius: 0.345rem;
  border: 1.5px solid whitesmoke;
  box-sizing: rgb(0 0 0 / 50%) 0px 0px 10px 0px;

  display: ${(event) => (event.activeState ? "flex" : "none")};
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  &:hover {
    background-image: linear-gradient(-88deg, cyan, crimson);
  }

  li {
    width: 100%;
    display: flex;
    align-items: flex-start;
    list-style: none;
    > .nav-link {
      display: flex;
      align-items: center;
      text-decoration: none;
      position: relative;
      img {
        width: 1.3rem;
        height: 1.3rem;
        object-fit: contain;
      }
      span {
        /* color: #fff; */
        color: black;
        font-size: 0.8rem;
        font-weight: bolder;
        letter-spacing: 1px;
        line-height: 1;
        padding: 0.3rem;
        margin-top: 5px;
        position: relative;
      }
    }
  }
`;

export default Navbar;
