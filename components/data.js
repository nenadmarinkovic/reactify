import React from "react";
import { DataWrap, DataFlex, DataItems, DataItem } from "../styles/components/data";
import { IntroText, IntroData } from "../styles/components/intro";
function Data() {
  return (
    <DataWrap>
      <div className="container-inside">
        <IntroText>Data</IntroText>
        <DataFlex>
          <DataItems>
            <DataItem className="no-ml">1</DataItem>
            <DataItem>2</DataItem>
            <DataItem className="no-mr">3</DataItem>
          </DataItems>
          <DataItems>
            <DataItem className="no-ml">1</DataItem>
            <DataItem>2</DataItem>
            <DataItem className="no-mr">3</DataItem>
          </DataItems>
          <DataItems>
            <DataItem className="no-ml">1</DataItem>
            <DataItem>2</DataItem>
            <DataItem className="no-mr">3</DataItem>
          </DataItems>
        </DataFlex>
      </div>
      <IntroData>APIs</IntroData>
    </DataWrap>
  );
}

export default Data;
