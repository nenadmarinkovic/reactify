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

function Banner({ theme, toggleTheme }) {
  return (
    <BannerContainer>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <div className="container">
        <BannerWrap>
          <BannerTextWrap>
            <BannerTextWrapTop>— DOT DIRECTORY</BannerTextWrapTop>
            <BannerTextTitle>Data</BannerTextTitle>
            <BannerTextWrapParagraph>
              A list of commonly used Content Management Systems that makes
              content accessible via a REST or GraphQL API for display on
              any device. With real data fetching for testing and experimenting.
            </BannerTextWrapParagraph>
          </BannerTextWrap>
        </BannerWrap>
      </div>
    </BannerContainer>
  );
}

export default Banner;
