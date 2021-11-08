import React from "react";
import {
  DataContainer,
  DataBox,
  DataFlex,
  DataItem,
} from "../styles/components/data";
import Highlighter from "./highlighter";

function Data(props) {
  return (
    <>
      <DataContainer>
        <div className="container-inside">
          <DataBox>
            <Highlighter globalTheme={props.globalTheme} />
          </DataBox>
          <DataFlex>
            <DataItem>1</DataItem>
            <DataItem>1</DataItem>
          </DataFlex>
        </div>
      </DataContainer>
    </>
  );
}

export default Data;
