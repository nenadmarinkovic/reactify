import styled from "styled-components";

export const DataContainer = styled.div`
  padding-top: 300px;
  background-color: #0050ff;
`;

export const DataBox = styled.div`
  background: ${({ theme }) => theme.itemBackground};
  border-radius: 10px;
  margin-top: -500px;
  transition: all 0.25s linear;
  border: ${({ theme }) => theme.borderHover};
`;

export const DataFlex = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 40px;

  @media (max-width: 560px) {
    flex-direction: column;
  }
`;

export const DataItem = styled.div`
  background: ${({ theme }) => theme.itemBackground};
  border-radius: 10px;
  transition: all 0.25s linear;
  width: 48%;
  border: ${({ theme }) => theme.borderHover};
  @media (max-width: 560px) {
    width: 100%;
    margin-bottom: 40px;
  }
`;
