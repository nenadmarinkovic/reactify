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
        <div className="container">
          <IntroText>Explore, discover, create</IntroText>
          <FlexItems>
            <FlexItem>
              <CountWrap>
                <Count end={32} duration={3} /> <span>+</span>
              </CountWrap>
              <CountText>Open-source tools for web developers</CountText>
            </FlexItem>
            <FlexItem>
              <CountWrap>
                <Count end={7} duration={3} /> <span>+</span>
              </CountWrap>
              <CountText> Third party API examples</CountText>
            </FlexItem>
            <FlexItem>
              <CountWrap>
                <Count end={15} duration={3} /> <span>+</span>
              </CountWrap>
              <CountText>UI design patterns for web designers</CountText>
            </FlexItem>
          </FlexItems>
        </div>
      </Wrap>
    </>
  );
}

export default Intro;
