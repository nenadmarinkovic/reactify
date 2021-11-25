import React from "react";
import {
  IntroText,
  Wrap,
  FlexItem,
  FlexItems,
  CountText,
  CountWrap,
} from "../styles/components/intro";
import Count from "../components/count";

function Intro() {
  return (
    <>
      <Wrap>
        <div className="scroll-to-intro" id="intro"></div>
        <div className="container">
          <IntroText>Explore, discover, create</IntroText>
          <FlexItems>
            <FlexItem>
              <CountWrap>
                <Count end={48} duration={3} /> <span>+</span>
              </CountWrap>
              <CountText>Design resources for web developers</CountText>
            </FlexItem>
            <FlexItem>
              <CountWrap>
                <Count end={3} duration={3} /> <span>+</span>
              </CountWrap>
              <CountText>Content management systems tested</CountText>
            </FlexItem>
            <FlexItem>
              <CountWrap>
                <Count end={530} duration={3} /> <span>+</span>
              </CountWrap>
              <CountText>APIs available for instant use</CountText>
            </FlexItem>
          </FlexItems>
        </div>
      </Wrap>
    </>
  );
}

export default Intro;
