import React from "react";
import { Item, ItemsFlex } from "../../styles/components/apis/items";
import Fade from "react-reveal/Fade";

function Entries({ list }) {
  console.log(list);
  return (
    <ItemsFlex>
      {list.map(({ API = "", Description, Link, index }) => (
        <Fade delay={300}>
          <Item key={index}>
            <div>
              <span>{index}</span>
              <span>{API}</span>
              <br></br>
              <br></br>
              <span>{Description}</span>
              <br></br>
              <br></br>
              <a href={`${Link}`} target="_blank">
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
