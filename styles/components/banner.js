import styled from "styled-components";

export const BannerContainer = styled.div`
  background: ${({ theme }) => theme.bannerBackground};
  transition: all 0.25s linear;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  position: relative;
  height: 800px;

  @media (min-width: 1980px) {
    height: 1025px;
  }
`;

export const BannerWrap = styled.div`
  padding-top: 280px;
`;

export const BannerTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;
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
`;

export const BannerTextWrapParagraph = styled.p`
  font-size: 1.3rem;
  font-family: "Studio-Feixen-Sans Book";
  line-height: 1.7;
  margin: 10px 0;
  color: ${({ theme }) => theme.mainText};
`;

export const BannerTextButton = styled.button`
  margin: 20px 0;
  background-color: ${({ theme }) => theme.helperText};
  border: ${({ theme }) => theme.helperText};
  display: inline-block;
  width: 255px;
  color: ${({ theme }) => theme.reversedText};
  padding: 0 30px;
  font-size: 1.2rem;
  line-height: 60px;
  font-weight: bold;
  border-radius: 5px;
  transition: 0.3s;
  cursor: pointer;

  :hover {
    background-color: #08d55a;
    border-color: #08d55a;
  }
`;
