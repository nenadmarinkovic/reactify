import React from "react";
import { BannerContainer } from "../styles/components/banner";
import Toggle from "./toggle";

function Banner(props) {
  return (

      <BannerContainer>
        <div className="container">
          <Toggle theme={props.theme} toggleTheme={props.toggleTheme} />
        </div>
      </BannerContainer>
 
  );
}

export default Banner;
