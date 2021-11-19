import React from "react";
import { useRouter } from "next/router";
import {
  BannerContainer,
  BannerWrap,
  BannerTextWrap,
  BannerTextWrapTop,
  BannerTextTitle,
  BannerTextWrapParagraph,
  BannerTextWrapLink,
} from "../../styles/components/data/cms-banner";
import Header from "../../components/header";
import Stats from "../cms-stats";

function Banner({ banner, theme, toggleTheme }) {
  if (banner.link) {
    var noProtocol = banner.link.replace(/^https?\:\/\//i, "");
  }

  const router = useRouter();

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
          <Stats theme={theme} />
        </BannerWrap>
      </div>
    </BannerContainer>
  );
}

export default Banner;
