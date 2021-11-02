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

function Banner({ theme, toggleTheme }) {
  return (
    <BannerContainer>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <div className="container">
        <BannerWrap>
          <BannerTextWrap>
            <a
              href="https://nenadmarinkovic.com"
              target="_blank"
              rel="noreferrer"
            >
              <BannerTextWrapTop>
                - PROJECT BY NENAD MARINKOVIĆ
              </BannerTextWrapTop>
            </a>
            <BannerTextTitle>
              Web directory for data, design, and APIs
            </BannerTextTitle>
            <BannerTextWrapParagraph>
              Dot Directory is a collection of useful web patterns, resources,
              tools and technologies that help developers and designers in their
              mission to make the web a better and more beautiful place.
            </BannerTextWrapParagraph>
            <BannerTextButton>Find out more</BannerTextButton>
          </BannerTextWrap>
        </BannerWrap>
      </div>
    </BannerContainer>
  );
}

export default Banner;
