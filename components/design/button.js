import React, { useState } from "react";
import { ButtonFlex, Button } from "../../styles/components/design/button";

function ButtonCategory({ button, filter }) {
  const [active, setActive] = useState(false);

  return (
    <ButtonFlex>
      {button.map((category, i) => {
        return (
          <Button
            aria-label="Select category"
            key={i}
            type="button"
            className={active == i ? "active-button" : "non-active-button"}
            onClick={() => {
              filter(category), setActive(i);
            }}
          >
            <span>{category}</span>
          </Button>
        );
      })}
    </ButtonFlex>
  );
}

export default ButtonCategory;
