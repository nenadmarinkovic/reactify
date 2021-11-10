import React from "react";
import {
  Item,
  ItemsFlex,
  ItemTitle,
  ItemDescription,
} from "../../styles/components/design/items";
import Fade from "react-reveal/Fade";
import Image from "next/image";

function Entries({ list }) {
  return (
    <ItemsFlex>
      {list.map((item, index) => (
        <Fade delay={index} key={index}>
          <a href={`${item.link}`} target="_blank" rel="noreferrer">
            <Item>
              <img src={item.icon.url} height="50px" width="50px" alt="Logo" />
              <ItemTitle>{item.name}</ItemTitle>
              <ItemDescription>{item.description}</ItemDescription>
            </Item>
          </a>
        </Fade>
      ))}
    </ItemsFlex>
  );
}

export default Entries;
