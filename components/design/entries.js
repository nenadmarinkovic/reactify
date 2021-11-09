import React from "react";
import {
  Item,
  ItemsFlex,
  ItemTitle,
  ItemDescription,
} from "../../styles/components/design/items";
import Fade from "react-reveal/Fade";

function Entries({ list }) {
console.log(list);
  return (
    <ItemsFlex>
      {list.map((item, index) => (
        <Fade delay={index} key={index}>
          <a href={`${item.link}`} target="_blank" rel="noreferrer">
            <Item>
              <img src={item.icon.url}/>
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
