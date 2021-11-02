import React from "react";
import {
  DesignContainer,
  DesignBox,
  DesignFlex,
  DesignItem,
} from "../styles/components/design";

function Design() {
  return (
    <>
      <DesignContainer>
        <div className="container-inside">
          <DesignBox></DesignBox>
          <DesignFlex>
            <DesignItem>1</DesignItem>
            <DesignItem>1</DesignItem>
          </DesignFlex>
        </div>
      </DesignContainer>
    </>
  );
}

export default Design;
