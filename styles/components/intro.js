import styled from "styled-components";

export const IntroText = styled.div`
  color: ${({ theme }) => theme.mainText};
  font-size: 3.525rem;
  font-family: "Studio-Feixen-Sans Black";
  text-align: center;
  padding: 120px 120px 60px 120px;
`;

export const IntroDesign = styled.div`
  color: ${({ theme }) => theme.mainText};
  font-size: 3.525rem;
  font-family: "Studio-Feixen-Sans Black";
  text-align: center;
  padding: 120px 120px 280px 120px;
`;

export const Wrap = styled.div`
  transition: all 0.25s linear;
  background: ${({ theme }) => theme.introBackground};
  padding-bottom: 100px;
`;

export const FlexItems = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FlexItem = styled.div`
  color: ${({ theme }) => theme.mainText};
  font-size: 3.125rem;
  font-family: "Studio-Feixen-Sans Black";
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CountText = styled.div`
  font-size: 23px;
  text-align: center;
  color: ${({ theme }) => theme.mainText};

  font-family: "Studio-Feixen-Sans Black";
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
