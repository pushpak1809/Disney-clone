import React from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectTrending } from "../Redux/Reducers/MovieReducer";
const Trending = () => {
  const movies = useSelector(selectTrending);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 991, settings: { slidesToShow: 3 } },
      { breakpoint: 767, settings: { slidesToShow: 2 } },
      { breakpoint: 425, settings: { slidesToShow: 2 } },
    ],
  };
  return (
    <>
      <Section>
        <h2>Trending</h2>
        <Carousel {...settings}>
          {movies &&
            movies.map((value, index) => (
              <Wrap key={index}>
                <div>
                  <NavLink to={`/detail/${value.id}`}>
                    <img src={value.CardImg} alt={value.id} />
                  </NavLink>
                </div>
              </Wrap>
            ))}
        </Carousel>
      </Section>
    </>
  );
};

const Section = styled.section`
  padding: 0.5rem 0;

  h1 {
    font-size: 1.7rem;
    text-transform: uppercase;
    font-weight: 300 !important;
    text-shadow: 0.1rem 0.1rem 0.1rem rgba(255, 255, 255, 0.1);
    margin: 2vh 0 1vh 2rem;

    @media screen and (max-width: 991px) {
      font-size: 0.9rem;
    }
    @media screen and (max-width: 550px) {
      font-size: 1.1rem;
    }
  }
`;
const Carousel = styled(Slider)`
  margin-top: 20px;

  ul li button {
    &:before {
      font-size: 11px;
      color: rgb(150, 150, 171);
    }
  }

  li.slick-active button::before {
    color: white;
  }

  .slick-list {
    overflow: visible;
  }

  button {
    z-index: 1;
  }
`;

const Wrap = styled.div`
  cursor: pointer;
  img {
    border: 4px solid transparent;
    border-radius: 9px;
    width: 100%;
    height: 100%;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 /73%) 0px 16px 10px -10px;
    transition-duration: 250ms;
    object-fit: fill;
    opacity: 1;
    z-index: 1500;
    position: relative;

    @media screen and (max-width: 991px) {
      width: 100%;
      height: auto;
      object-fit: cover;
    }

    &:hover {
      opacity: 1;
      z-index: 2000;
      position: relative;
      /* border: 2px solid whitesmoke; */
      transform: scale(1.2);
    }
  }
`;

export default Trending;
