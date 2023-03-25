import React from "react";
import {
  BannerContainer,
  BannerWrap,
  BannerTextWrap,
  BannerTextTitle,
  BannerTextWrapParagraph,
  BannerTextButton,
} from "../styles/components/banner";
import Header from "../components/header";
import { Link } from "react-scroll";

function Banner({ theme, toggleTheme }) {
  return (
    <BannerContainer>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <div className="container">
        <BannerWrap>
          <BannerTextWrap>
            <BannerTextTitle>
              Data, design, and APIs around React
            </BannerTextTitle>
            <BannerTextWrapParagraph>
              Reactify is a collection of useful web patterns, resources, tools
              and technologies that help developers and designers in their
              mission to make the web a better and more beautiful place.
            </BannerTextWrapParagraph>
            <BannerTextButton>
              <Link
                activeClass="active"
                to="intro"
                spy={true}
                smooth={true}
                className="banner-button"
              >
                Find out more
              </Link>
            </BannerTextButton>
          </BannerTextWrap>
          <div className="box">
            <span className="point"></span>
            <span className="ring-1"></span>
            <span className="ring-2"></span>
            <span className="ring-3"></span>
          </div>
        </BannerWrap>
      </div>
    </BannerContainer>
  );
}

export default Banner;
