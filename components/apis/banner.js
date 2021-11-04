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
            <BannerTextWrapTop>— DOT DIRECTORY</BannerTextWrapTop>
            <BannerTextTitle>APIs</BannerTextTitle>
            <BannerTextWrapParagraph>
              A collection of free APIs for use in software and web development
              projects. Official list can be found at{" "}
              <a
                href="https://github.com/public-apis/public-apis"
                target="_blank"
                rel="noreferrer"
              >
                Public APIs GitHub profile
              </a>
              .
            </BannerTextWrapParagraph>
          </BannerTextWrap>
        </BannerWrap>
      </div>
    </BannerContainer>
  );
}

export default Banner;
