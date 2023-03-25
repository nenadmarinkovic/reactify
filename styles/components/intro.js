import styled from "styled-components";

export const IntroText = styled.div`
  color: ${({ theme }) => theme.mainText};
  font-size: 2.525rem;
  font-family: "Studio-Feixen-Sans Black";
  text-align: center;
  padding: 120px 120px 60px 120px;

  @media (max-width: 768px) {
    padding: 60px 0 60px 0;
  }

  @media (max-width: 560px) {
    font-size: 2.525rem;
  }
`;

export const IntroDesign = styled.div`
  color: ${({ theme }) => theme.mainText};
  font-size: 3.525rem;
  font-family: "Studio-Feixen-Sans Black";
  text-align: center;
  padding: 60px 120px 280px 120px;

  @media (max-width: 768px) {
    padding: 60px 20px 280px 20px;
  }

  @media (max-width: 560px) {
    font-size: 2.525rem;
  }
`;

export const Wrap = styled.div`
  background: ${({ theme }) => theme.introBackground};
  padding-bottom: 100px;
  position: relative;
  z-index: 1;

  @media (max-width: 560px) {
    padding-bottom: 30px;
  }
`;

export const FlexItems = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FlexItem = styled.div`
  color: ${({ theme }) => theme.mainText};
  font-size: 3.125rem;
  font-family: "Studio-Feixen-Sans Black";
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

export const CountText = styled.div`
  font-size: 23px;
  text-align: center;
  line-height: 1.5;
  font-family: "Studio-Feixen-Sans Regular";
  color: ${({ theme }) => theme.mainText};
  width: 80%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const CountWrap = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.helperText};
`;

export const HelperText = styled.div`
  font-size: 23px;
  margin-top: 20px;
  color: ${({ theme }) => theme.mainText};
`;

export const LearnMore = styled.div`
  font-size: 18px;
  margin-top: 30px;
  color: ${({ theme }) => theme.mainText};
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Studio-Feixen-Sans Regular";
  cursor: pointer;

  a {
    color: ${({ theme }) => theme.mainText};
  }

  svg {
    margin-top: 2px;
    position: relative;
    transition: transform 0.3s ease-in-out;
    transform: translate(17px);

    path {
      fill: ${({ theme }) => theme.mainText};
    }
  }

  :hover {
    svg {
      transition: transform 0.3s ease-in-out;
      transform: translate(34px);
    }
  }
`;
