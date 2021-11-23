import React from "react";
import {
  Container,
  ContainerFlex,
  Image,
  Text,
} from "../styles/components/about-container";

function AboutContainer() {
  return (
    <Container>
      <div className="container">
        <ContainerFlex>
          <Text>
            <p>
              Dot Directory is an open-source web directory with different
              purposes and goals. It serves as a personal collection of design
              resources handpicked around the web, tool for testing various
              content-management systems, and as a web application for playing
              with different APIs.
            </p>
            <p>
              As such, Dot Directory is a constant work in progress and a
              personal playground for testing and experimenting with different
              tools and technologies around React and Next.js on the front-end,
              and various headless platforms for storing and manipulating data
              on the back-end.
            </p>
            <p>
              Only after testing them, one can have confidence of recommending
              those tools and technologies to other developers and clients.
            </p>
            <p>
              The creator of Dot Directory is{" "}
              <a
                href="https://nenadmarinkovic.com"
                target="_blank"
                rel="noreferrer"
              >
                Nenad Marinković
              </a>{" "}
              and all code is available in{" "}
              <a
                href="https://github.com/nenadmarinkovic/dot"
                target="_blank"
                rel="noreferrer"
              >
                GitHub repository
              </a>
              .
            </p>
          </Text>
          <Image>
            <svg
              width="240"
              height="162"
              viewBox="0 0 240 162"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M159.447 159.683C203.542 159.683 239.288 123.937 239.288 79.8416C239.288 35.7462 203.542 0 159.447 0C115.352 0 79.605 35.7462 79.605 79.8416C79.605 123.937 115.352 159.683 159.447 159.683Z"
                fill="#193AE5"
              />
              <path
                d="M79.8416 159.683C123.937 159.683 159.683 123.937 159.683 79.8416C159.683 35.7462 123.937 0 79.8416 0C35.7463 0 0 35.7462 0 79.8416C0 123.937 35.7463 159.683 79.8416 159.683Z"
                fill="white"
              />
              <path
                d="M119.646 10.6146C143.574 24.4027 159.684 50.2414 159.684 79.8416C159.684 109.442 143.574 135.28 119.646 149.068C95.7143 135.282 79.605 109.443 79.605 79.8416C79.605 50.2984 95.6513 24.5021 119.504 10.6936L119.646 10.6146Z"
                fill="#96E6FE"
              />
            </svg>
          </Image>
        </ContainerFlex>
      </div>
    </Container>
  );
}

export default AboutContainer;
