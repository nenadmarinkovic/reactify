import React from "react";
import {
  DesignWrap,
  DesignFlex,
  DesignItems,
  DesignItem,
} from "../styles/components/design";
import { IntroText, IntroDesign } from "../styles/components/intro";
function Design() {
  return (
    <DesignWrap>
      <div className="container-inside">
        <IntroText>Design</IntroText>
        <DesignFlex>
          <DesignItems>
            <DesignItem className="no-ml">1</DesignItem>
            <DesignItem>2</DesignItem>
            <DesignItem className="no-mr">3</DesignItem>
          </DesignItems>
          <DesignItems>
            <DesignItem className="no-ml">1</DesignItem>
            <DesignItem>2</DesignItem>
            <DesignItem className="no-mr">3</DesignItem>
          </DesignItems>
          <DesignItems>
            <DesignItem className="no-ml">1</DesignItem>
            <DesignItem>2</DesignItem>
            <DesignItem className="no-mr">3</DesignItem>
          </DesignItems>
        </DesignFlex>
      </div>
      <IntroDesign>Data</IntroDesign>
    </DesignWrap>
  );
}

export default Design;
