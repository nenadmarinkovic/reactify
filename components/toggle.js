import React from "react";
import { ToggleButton } from "../styles/components/toggle";
import LightThemeButton from "./theme-button-light";
import DarkThemeButton from "./theme-button-dark";

const Toggle = (props) => {
  return (
    <>
      <ToggleButton onClick={props.toggleTheme}>
        {props.theme === "light" ? <DarkThemeButton /> : <LightThemeButton />}
      </ToggleButton>
    </>
  );
};

export default Toggle;
