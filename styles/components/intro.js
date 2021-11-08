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
