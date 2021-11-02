import styled from "styled-components";

export const ItemsContainer = styled.div`
  background: ${({ theme }) => theme.dataBackground};
  color: ${({ theme }) => theme.mainText};
  transition: all 0.25s linear;
  padding: 120px 0;
`;

export const Item = styled.div`
  background: ${({ theme }) => theme.itemBackground};
  color: black;
  transition: all 0.25s linear;
  width: 300px;
  margin-bottom: 30px;
  padding: 10px;
  text-align: center;
  border-radius: 10px;
`;

export const ItemsFlex = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
  padding-top: 60px
`;
