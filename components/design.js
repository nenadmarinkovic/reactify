import React from "react";
import {
  DesignWrap,
  DesignFlex,
  DesignItems,
  DesignItem,
} from "../styles/components/design";
import Link from "next/link";
import {
  IntroText,
  IntroDesign,
  HelperText,
  LearnMore,
} from "../styles/components/intro";
import Image from "next/image";
import { ItemTitle, ItemDescription } from "../styles/components/design/items";

function Design({ items }) {
  const homepageItems = items.filter((item) => item.homepage);
  return (
    <DesignWrap>
      <div className="container-inside">
        <IntroText>
          Design
          <HelperText>A list of web design resources for developers</HelperText>
          <LearnMore>
            <Link href="/design">Discover more resources</Link>
            <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.46967 0.469668C0.76256 0.176777 1.2374 0.176777 1.5303 0.469668L7.5303 6.4697C7.8232 6.7626 7.8232 7.2374 7.5303 7.5303L1.5303 13.5303C1.2374 13.8232 0.76256 13.8232 0.46967 13.5303C0.17678 13.2374 0.17678 12.7626 0.46967 12.4697L5.9393 7L0.46967 1.53033C0.17678 1.23744 0.17678 0.762558 0.46967 0.469668Z"
                fill="black"
              />
            </svg>
          </LearnMore>
        </IntroText>
        <DesignFlex>
          <DesignItems>
            {homepageItems.map((item, index) => {
              return (
                <DesignItem
                  href={`${item.link}`}
                  target="_blank"
                  rel="noreferrer"
                  key={index}
                >
                  <img
                    src={item.icon.url}
                    height="50px"
                    width="50px"
                    alt="Logo"
                  />
                  <ItemTitle>{item.name}</ItemTitle>
                  <ItemDescription>{item.description}</ItemDescription>
                </DesignItem>
              );
            })}
          </DesignItems>
        </DesignFlex>
      </div>
      <IntroDesign>
        Data
        <HelperText>
          Fetching data from Headless CMS back-end, example using Dato CMS
        </HelperText>
        <LearnMore>
          <Link href="/data">Discover more examples</Link>
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.46967 0.469668C0.76256 0.176777 1.2374 0.176777 1.5303 0.469668L7.5303 6.4697C7.8232 6.7626 7.8232 7.2374 7.5303 7.5303L1.5303 13.5303C1.2374 13.8232 0.76256 13.8232 0.46967 13.5303C0.17678 13.2374 0.17678 12.7626 0.46967 12.4697L5.9393 7L0.46967 1.53033C0.17678 1.23744 0.17678 0.762558 0.46967 0.469668Z"
              fill="black"
            />
          </svg>
        </LearnMore>
      </IntroDesign>
    </DesignWrap>
  );
}

export default Design;
