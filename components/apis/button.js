import React, { useState } from "react";
import {
  ButtonFlex,
  Button
} from "../../styles/components/apis/button";

function ButtonCategory({ button, filter }) {
  const [active, setActive] = useState(false);

  return (
    <ButtonFlex>
      {button.map((Category, i) => {
        return (
          <Button
            aria-label="Select category"
            key={i}
            type="button"
            className={active == i ? "active-button" : "non-active-button"}
            onClick={() => {
              filter(Category), setActive(i);
            }}
          >
            <span>{Category}</span>
          </Button>
        );
      })}
    </ButtonFlex>
  );
}

export default ButtonCategory;
