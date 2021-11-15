import React from "react";
import {
  BannerContainer,
  BannerWrap,
  BannerTextWrap,
  BannerTextWrapTop,
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
            <BannerTextWrapTop>— DOT DIRECTORY</BannerTextWrapTop>

            <BannerTextTitle>
              Web directory for data, design, and APIs
            </BannerTextTitle>
            <BannerTextWrapParagraph>
              Dot Directory is a collection of useful web patterns, resources,
              tools and technologies that help developers and designers in their
              mission to make the web a better and more beautiful place.
            </BannerTextWrapParagraph>
            <BannerTextButton>
              <Link activeClass="active" to="intro" spy={true} smooth={true}>
                Find out more
              </Link>
            </BannerTextButton>
          </BannerTextWrap>
        </BannerWrap>
      </div>
    </BannerContainer>
  );
}

export default Banner;
