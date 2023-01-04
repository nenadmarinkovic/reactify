import React from "react";
import {
  ItemsContainer,
  ItemsFlex,
  Item,
  Logo,
  Text,
} from "../../styles/components/data/items";
import Link from "next/link";

function Items({ theme }) {
  return (
    <ItemsContainer>
      <div className="container-inside">
        <ItemsFlex>
          <Item>
            <Link href="data/contentful" passHref className="link-item">
              <Logo
                className="logo-data-big"
                src={`images/icons/${
                  theme == "dark"
                    ? "contentful-dark-theme.svg"
                    : "contentful-light-theme.svg"
                }`}
              ></Logo>
              <Text>
                API-first, cloud-native SaaS for complex and diverse business
                needs.
              </Text>
            </Link>
          </Item>
          <Item>
            <Link href="data/sanity" passHref className="link-item">
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
            </Link>
          </Item>
          <Item>
            <Link href="data/datocms" passHref className="link-item">
              <Logo
                src={`images/icons/${
                  theme == "dark"
                    ? "dato-dark-theme.svg"
                    : "dato-light-theme.svg"
                }`}
              ></Logo>
              <Text>The API-based CMS with a customizable interface.</Text>
            </Link>
          </Item>
          <Item>
            <Link href="data/graphcms" passHref className="link-item">
              <Logo
                className="logo-data-big"
                src={`images/icons/${
                  theme == "dark"
                    ? "graphcms-dark-theme.svg"
                    : "graphcms-light-theme.svg"
                }`}
              ></Logo>
              <Text>
                Instant GraphQL Content APIs to create, enrich, unify, and
                deliver your content.
              </Text>
            </Link>
          </Item>
        </ItemsFlex>
      </div>
    </ItemsContainer>
  );
}

export default Items;
