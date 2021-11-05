import React from "react";
import {
  Item,
  ItemsFlex,
  ItemTitle,
  ItemDescription,
} from "../../styles/components/apis/items";
import Fade from "react-reveal/Fade";

function Entries({ list }) {
  return (
    <ItemsFlex>
      {list.map((item, index) => (
        <Fade delay={index} key={index}>
          <a href={`${item.Link}`} target="_blank" rel="noreferrer">
            <Item>
              <ItemTitle>{item.API}</ItemTitle>
              <ItemDescription>{item.Description}</ItemDescription>
            </Item>
          </a>
        </Fade>
      ))}
    </ItemsFlex>
  );
}

export default Entries;
