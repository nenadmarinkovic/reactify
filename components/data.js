import React from "react";
import { DataWrap, DataFlex, DataItem } from "../styles/components/data";
import { IntroText, IntroData } from "../styles/components/intro";
function Data() {
  return (
    <DataWrap>
      <div className="container-inside">
        <IntroText>Data</IntroText>
        <DataFlex>
          <div>
            <DataItem>1</DataItem>
            <DataItem>2</DataItem>
            <DataItem>3</DataItem>
          </div>
          <div>
            <DataItem>1</DataItem>
            <DataItem>2</DataItem>
            <DataItem>3</DataItem>
          </div>
          <div>
            <DataItem>1</DataItem>
            <DataItem>2</DataItem>
            <DataItem>3</DataItem>
          </div>
        </DataFlex>
      </div>
      <IntroData>APIs</IntroData>
    </DataWrap>
  );
}

export default Data;
