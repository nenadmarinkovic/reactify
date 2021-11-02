import styled from "styled-components";

export const DataWrap = styled.div`
  transition: all 0.25s linear;
  background: ${({ theme }) => theme.dataBackground};
`;

export const DataFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 120px;
`;

export const DataItem = styled.div`
  transition: all 0.25s linear;
  background: ${({ theme }) => theme.itemBackground};
  height: 250px;
  width: 300px;
  margin: 15px 20px;
  border-radius: 10px;
`;

export const DataItems = styled.div`
  display: flex;
  justify-content: space-between;
`;

