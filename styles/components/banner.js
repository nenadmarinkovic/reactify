import styled from "styled-components";

export const BannerContainer = styled.div`
  background: ${({ theme }) => theme.bannerBackground};
  border-bottom: 5px solid ${({ theme }) => theme.additionalBorder};
`;

export const BannerWrap = styled.div`
  padding-top: 180px;
  padding-bottom: 80px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin: 0 320px;

  @media (min-width: 1580px) {
    padding-top: 180px;
  }

  @media (max-width: 680px) {
    padding-top: 140px;
  }
`;

export const BannerTextWrap = styled.div`
  display: flex;
  flex-direction: column;

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
