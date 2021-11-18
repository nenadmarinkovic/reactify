import React from "react";
import { TechWrap, TechContainer, Logo } from "../styles/components/tech";

function Tech({ theme }) {
  return (
    <TechWrap>
      <div className="container">
        <TechContainer>
          <Logo
            src={`images/icons/${
              theme == "dark" ? "react-dark-theme.svg" : "react-light-theme.svg"
            }`}
          ></Logo>
          <Logo
            className="tech-icon-alt"
            src={`images/icons/${
              theme == "dark" ? "next-dark-theme.svg" : "next-light-theme.svg"
            }`}
          ></Logo>
          <Logo
            className="tech-icon"
            src={`images/icons/${
              theme == "dark"
                ? "contentful-dark-theme.svg"
                : "contentful-light-theme.svg"
            }`}
          ></Logo>
          <Logo
            className="tech-icon-alt"
            src={`images/icons/${
              theme == "dark"
                ? "sanity-dark-theme.svg"
                : "sanity-light-theme.svg"
            }`}
          ></Logo>
          <Logo
            className="tech-icon-alt"
            src={`images/icons/${
              theme == "dark" ? "dato-dark-theme.svg" : "dato-light-theme.svg"
            }`}
          ></Logo>
          <Logo
            src={`images/icons/${
              theme == "dark"
                ? "strapi-dark-theme.svg"
                : "strapi-light-theme.svg"
            }`}
          ></Logo>
        </TechContainer>
      </div>
    </TechWrap>
  );
}

export default Tech;
