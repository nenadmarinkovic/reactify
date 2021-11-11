import React from "react";
import {
  ItemsContainer,
  ItemsFlex,
  Item,
  Logo,
  Text,
} from "../../styles/components/data/items";

function Items({ theme }) {
  return (
    <ItemsContainer>
      <div className="container-inside">
        <ItemsFlex>
          <Item>
            <Logo
              src={`images/icons/${
                theme == "dark"
                  ? "sanity-dark-theme.svg"
                  : "sanity-light-theme.svg"
              }`}
            ></Logo>
            <Text>
              Highly versatile and adaptable platform for structured content.
            </Text>
          </Item>
          <Item>
            <Logo
              src={`images/icons/${
                theme == "dark" ? "dato-dark-theme.svg" : "dato-light-theme.svg"
              }`}
            ></Logo>
            <Text>The API-based CMS with a customizable interface.</Text>
          </Item>
          <Item>
            <Logo
              className="logo-data-big"
              src={`images/icons/${
                theme == "dark"
                  ? "storyblok-dark-theme.svg"
                  : "storyblok-light-theme.svg"
              }`}
            ></Logo>
            <Text>The only headless CMS with a visual editor.</Text>
          </Item>
          <Item>
            <Logo
              src={`images/icons/${
                theme == "dark"
                  ? "strapi-dark-theme.svg"
                  : "strapi-light-theme.svg"
              }`}
            ></Logo>
            <Text>
              Open source Node.js Headless CMS to easily build customisable
              APIs.
            </Text>
          </Item>
        </ItemsFlex>
      </div>
    </ItemsContainer>
  );
}

export default Items;
