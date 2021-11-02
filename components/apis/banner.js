import React from "react";
import {
  BannerContainer,
  BannerWrap,
  BannerTextWrap,
  BannerTextWrapTop,
  BannerTextTitle,
  BannerTextWrapParagraph,
} from "../../styles/components/apis/banner";
import Header from "../../components/header";

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
            <BannerTextTitle>APIs</BannerTextTitle>
            <BannerTextWrapParagraph>
              Dot Directory is a collection of useful web patterns, resources,
              tools and technologies that help developers and designers in their
              mission to make the web a better and more beautiful place.
            </BannerTextWrapParagraph>
          </BannerTextWrap>
        </BannerWrap>
      </div>
    </BannerContainer>
  );
}

export default Banner;
