import React from "react";
import {
  BannerContainer,
  BannerWrap,
  BannerTextWrap,
  BannerTextWrapTop,
  BannerTextTitle,
  BannerTextWrapParagraph,
  BannerTextWrapLink,
} from "../../styles/components/design/banner";
import Header from "../../components/header";

function Banner({ banner, theme, toggleTheme }) {
  if (banner.link) {
    var noProtocol = banner.link.replace(/^https?\:\/\//i, "");
  }

  return (
    <BannerContainer>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <div className="container">
        <BannerWrap>
          <BannerTextWrap>
            <BannerTextWrapTop>— DOT DIRECTORY</BannerTextWrapTop>
            <BannerTextTitle>{banner.title}</BannerTextTitle>
            <BannerTextWrapParagraph>{banner.text}</BannerTextWrapParagraph>
            {banner.link ? (
              <BannerTextWrapLink
                href={`${banner.link}`}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <span>Link:</span>
                {noProtocol}
              </BannerTextWrapLink>
            ) : (
              ""
            )}
          </BannerTextWrap>
        </BannerWrap>
      </div>
    </BannerContainer>
  );
}

export default Banner;
