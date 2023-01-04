import React from "react";
import {
  Container,
  ContainerFlex,
  Image,
  Text,
} from "../styles/components/about-container";
import Fade from "react-reveal/Fade";

function AboutContainer() {
  return (
    <Container>
      <div className="container">
        <ContainerFlex>
          <Text>
            <p>
            Reactify is an open-source collection of useful design
              resources handpicked around the web, a place for testing different
              content management systems around Next.js and React ecosystem, and
              a playground for trying out different APIs.
            </p>
            <p>
              Reactify helps developers and designers find the best tools
              and technologies for their job. As such, the purpose of the
              project is to make the web a better and more beautiful place.
            </p>
            <p>
              The creator of Reactify is{" "}
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
            <Fade bottom>
              <div>
                <svg
                  width="240"
                  height="162"
                  viewBox="0 0 240 162"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M159.447 159.683C203.542 159.683 239.288 123.937 239.288 79.8416C239.288 35.7462 203.542 0 159.447 0C115.352 0 79.605 35.7462 79.605 79.8416C79.605 123.937 115.352 159.683 159.447 159.683Z"
                    fill="#0050ff"
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
              </div>
            </Fade>
          </Image>
        </ContainerFlex>
      </div>
    </Container>
  );
}

export default AboutContainer;
