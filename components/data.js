import React from "react";
import {
  DataContainer,
  DataBox,
  DataFlex,
  DataItem,
} from "../styles/components/data";
import Highlighter from "./highlighter";

import datoCMS from "./data/code-datocms";
import NextJS from "./data/code-nextjs";
import GraphQL from "./data/code-graphql";

function Data(props) {
  return (
    <>
      <DataContainer>
        <div className="container-inside">
          <DataBox>
            <Highlighter globalTheme={props.globalTheme} code={datoCMS} />
          </DataBox>
          <DataFlex>
            <DataItem>
              <Highlighter globalTheme={props.globalTheme} code={NextJS} />
            </DataItem>
            <DataItem>
              <Highlighter globalTheme={props.globalTheme} code={GraphQL} />
            </DataItem>
          </DataFlex>
        </div>
      </DataContainer>
    </>
  );
}

export default Data;
