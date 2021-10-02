import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from "../images/slide1.jpg";
import slide2 from "../images/slide2.jpg";
import slide3 from "../images/slide3.jpg";
import slide4 from "../images/slide4.jpg";
import slide5 from "../images/slide5.jpg";
import slide6 from "../images/slide6.jpg";
import slide7 from "../images/slide7.jpg";
import slide8 from "../images/Untitled-1.png";
import slide9 from "../images/Untitled-2.png";
import slide10 from "../images/Untitled-3.png";
import slide11 from "../images/Untitled-4.png";
import slide12 from "../images/Untitled-5.png";
import slide14 from "../images/Untitled-7.png";
import slide15 from "../images/Untitled-8.png";
import slide16 from "../images/Untitled-9.png";
import slide17 from "../images/Untitled-10.png";
import slide18 from "../images/Untitled-11.png";
import slide19 from "../images/Untitled-12.png";
import slide20 from "../images/Untitled-13.png";
import slide21 from "../images/Untitled-14.png";
import slide22 from "../images/Untitled-15.png";
import slide23 from "../images/Untitled-16.png";
import slide24 from "../images/Untitled-17.png";
import slide25 from "../images/Untitled-18.png";
import slide26 from "../images/Untitled-19.png";
import slide27 from "../images/Untitled-20.png";

const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 991, settings: { slidesToShow: 3 } },
      { breakpoint: 767, settings: { slidesToShow: 2 } },
      { breakpoint: 425, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <>
      <Carsouel {...settings}>
        <Wrap>
          <div>
            <img src={slide9} alt="" />
          </div>
        </Wrap>
        <Wrap>
          <div>
            <img src={slide26} alt="" />
          </div>
        </Wrap>
        <Wrap>
          <div>
            <img src={slide14} alt="" />
          </div>
        </Wrap>
        <Wrap>
          <div>
            <img src={slide27} alt="" />
          </div>
        </Wrap>
        <Wrap>
          <div>
            <img src={slide8} alt="" />
          </div>
        </Wrap>
        <Wrap>
          <div>
            <img src={slide18} alt="" />
          </div>
        </Wrap>
        <Wrap>
          <div>
            <img src={slide24} alt="" />
          </div>
        </Wrap>
        <Wrap>
          <div>
            <img src={slide10} alt="" />
          </div>
        </Wrap>
        <Wrap>
          <div>
            <img src={slide17} alt="" />
          </div>
        </Wrap>
        <Wrap>
          <div>
            <img src={slide11} alt="" />
          </div>
        </Wrap>
        <Wrap>
          <div>
            <img src={slide12} alt="" />
          </div>
        </Wrap>
        <Wrap>
          <div>
            <img src={slide19} alt="" />
          </div>
        </Wrap>
        <Wrap>
          <div>
            <img src={slide21} alt="" />
          </div>
        </Wrap>
        <Wrap>
          <div>
            <img src={slide22} alt="" />
          </div>
        </Wrap>
        <Wrap>
          <div>
            <img src={slide23} alt="" />
          </div>
        </Wrap>
        <Wrap>
          <div>
            <img src={slide2} alt="" />
          </div>
        </Wrap>
        <Wrap>
          <div>
            <img src={slide3} alt="" />
          </div>
        </Wrap>
        <Wrap>
          <div>
            <img src={slide25} alt="" />
          </div>
        </Wrap>
        <Wrap>
          <div>
            <img src={slide6} alt="" />
          </div>
        </Wrap>
        <Wrap>
          <div>
            <img src={slide20} alt="" />
          </div>
        </Wrap>
        <Wrap>
          <div>
            <img src={slide15} alt="" />
          </div>
        </Wrap>
        <Wrap>
          <div>
            <img src={slide16} alt="" />
          </div>
        </Wrap>
        <Wrap>
          <div>
            <img src={slide1} alt="" />
          </div>
        </Wrap>
        <Wrap>
          <div>
            <img src={slide4} alt="" />
          </div>
        </Wrap>
        <Wrap>
          <div>
            <img src={slide7} alt="" />
          </div>
        </Wrap>
        <Wrap>
          <div>
            <img src={slide5} alt="" />
          </div>
        </Wrap>
      </Carsouel>
    </>
  );
};

const Carsouel = styled(Slider)`
  /* margin-top: 20px; */

  ul li button {
    &:before {
      font-size: 5px;
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

    @media screen and (min-width: 375px) and (max-width: 550px) {
      width: 100%;
      height: 15vh;
      object-fit: fill;
    }
    @media screen and (min-width: 280px) and (max-width: 375px) {
      width: 100%;
      height: 17vh;
      object-fit: fill;
    }
    &:hover {
      border: 2px solid whitesmoke;
    }
  }
`;
export default Banner;
