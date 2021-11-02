import React from "react";
import { Item, ItemsFlex } from "../../styles/components/apis/items";
import Fade from "react-reveal/Fade";

function Entries({ list }) {
  console.log(list);
  return (
    <ItemsFlex>
      {list.map((item, index) => (
        <Fade delay={index * 10}>
          <Item key={index}>
            <div>
              <span>{item.API}</span>
              <br></br>
              <br></br>
              <span>{item.Description}</span>
              <br></br>
              <br></br>
              <a href={`${item.Link}`} target="_blank">
                Go to the link
              </a>
            </div>
          </Item>
        </Fade>
      ))}
    </ItemsFlex>
  );
}

export default Entries;
