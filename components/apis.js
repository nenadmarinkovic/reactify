import React from "react";
import {
  ApisContainer,
  ApisBox,
  ApisFlex,
  ApisItem,
} from "../styles/components/apis";
import { IntroText } from "../styles/components/intro";

function Apis() {
  return (
    <>
      <ApisContainer>
        <div className="container-inside">
          <ApisBox></ApisBox>
          <ApisFlex>
            <ApisItem>1</ApisItem>
            <ApisItem>1</ApisItem>
          </ApisFlex>
        </div>
      </ApisContainer>
    </>
  );
}

export default Apis;
