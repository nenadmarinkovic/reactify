import React, { useState } from "react";
import ButtonCategory from "./button";
import Entries from "./entries";
import { ItemsContainer } from "../../styles/components/apis/items";

function Items({ items }) {
  const allCategories = ["All", ...new Set(items.map((item) => item.Category))];
  const [list, setList] = useState(items);
  const [buttons] = useState(allCategories);

  const filter = (button) => {
    if (button === "All") {
      setList(items);
      return;
    }

    const filteredData = items.filter((item) => item.Category === button);
    setList(filteredData);
  };

  return (
    <ItemsContainer>
      <div className="container">
        <ButtonCategory button={buttons} filter={filter} />
      </div>
      <div className="container-inside">
        <Entries list={list} />
      </div>
    </ItemsContainer>
  );
}

export default Items;
