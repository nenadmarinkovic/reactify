import React from "react";
import {
  BannerContainer,
  BannerWrap,
  BannerTextWrap,
  BannerTextWrapTop,
  BannerTextTitle,
  BannerTextWrapParagraph,
} from "../../styles/components/design/banner";
import Header from "../../components/header";

function Banner({ banner, theme, toggleTheme }) {
  return (
    <BannerContainer>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <div className="container">
        <BannerWrap>
          <BannerTextWrap>
            <BannerTextWrapTop>— DOT DIRECTORY</BannerTextWrapTop>
            <BannerTextTitle>{banner.title}</BannerTextTitle>
            <BannerTextWrapParagraph>{banner.text}</BannerTextWrapParagraph>
          </BannerTextWrap>
        </BannerWrap>
      </div>
    </BannerContainer>
  );
}

export default Banner;
