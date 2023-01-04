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
            <BannerTextWrapTop>— REACTIFY</BannerTextWrapTop>
            <BannerTextTitle>Design</BannerTextTitle>
            <BannerTextWrapParagraph>
              List of design resources for developers, handpicked from various
              online sources and collected in personal{" "}
              <a
                href="https://datocms.dot.directory"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                DatoCMS
              </a>{" "}
              back-end.
            </BannerTextWrapParagraph>
          </BannerTextWrap>
        </BannerWrap>
      </div>
    </BannerContainer>
  );
}

export default Banner;
