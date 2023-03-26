import styled from "styled-components";

export const BannerContainer = styled.div`
  border-bottom: 5px solid ${({ theme }) => theme.additionalBorder};
  background: ${({ theme }) => theme.background};
  z-index: 1;
`;

export const BannerWrap = styled.div`
  padding-top: 220px;
  padding-bottom: 120px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin: 0 380px;

  @media (max-width: 1572px) {
    margin: 0 100px;
  }

  @media (max-width: 1280px) {
    margin: 0 180px;
  }

  @media (max-width: 960px) {
    margin: 0 80px;
  }

  @media (max-width: 480px) {
    margin: 0;
  }
`;

export const BannerTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;

  @media (max-width: 1080px) {
    width: 100%;
    text-align: center;
    align-items: center;
  }
`;

export const BannerTextTitle = styled.h1`
  font-size: 4.125rem;
  font-family: "Studio-Feixen-Sans Black";
  margin: 10px 0;
  color: ${({ theme }) => theme.mainText};

  @media (max-width: 560px) {
    font-size: 2.525rem;
  }
`;

export const BannerTextWrapParagraph = styled.p`
  font-size: 1.3rem;
  font-family: "Studio-Feixen-Sans Book";
  line-height: 1.7;
  margin: 10px 0;
  color: ${({ theme }) => theme.mainText};
`;

export const BannerTextButton = styled.button`
  margin: 1.5rem auto;
  background-color: ${({ theme }) => theme.helperText};
  border: ${({ theme }) => theme.helperText};
  display: inline-block;
  width: 255px;
  color: ${({ theme }) => theme.reversedText};
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 5px;
  transition: 0.3s;
  cursor: pointer;

  :hover {
    filter: brightness(0.85);
  }
`;
