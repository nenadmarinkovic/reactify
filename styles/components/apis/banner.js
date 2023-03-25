import styled from "styled-components";

export const BannerContainer = styled.div`
  background: ${({ theme }) => theme.background};
`;

export const BannerWrap = styled.div`
  padding: 180px 0 80px 0;

  @media (max-width: 680px) {
    padding-top: 140px;
  }
`;

export const BannerTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;

  @media (max-width: 1080px) {
    width: 100%;
    text-align: center;
    align-items: center;
  }
`;

export const BannerTextWrapTop = styled.div`
  color: ${({ theme }) => theme.helperText};
  text-transform: capitalize;
  font-family: "Studio-Feixen-Sans Bold";
  letter-spacing: 2px;
  line-height: 1.2;
`;

export const BannerTextTitle = styled.h1`
  font-size: 3.525rem;
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

  a {
    color: ${({ theme }) => theme.helperText};
  }
`;

export const BannerTextButton = styled.button`
  margin: 20px 0;
  background-color: ${({ theme }) => theme.helperText};
  border: ${({ theme }) => theme.helperText};
  display: inline-block;
  width: 255px;
  color: ${({ theme }) => theme.reversedText};
  padding: 20px;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 5px;
  transition: 0.3s;
  cursor: pointer;
`;
