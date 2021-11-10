import styled from "styled-components";

export const ItemsContainer = styled.div`
  background: ${({ theme }) => theme.background};
  transition: all 0.25s linear;
`;

export const Item = styled.div`
  transition: all 0.25s linear;
  background: ${({ theme }) => theme.itemBackground};
  color: ${({ theme }) => theme.mainText};
  width: 260px;
  margin-bottom: 40px;
  padding: 30px;
  text-align: center;
  border-radius: 10px;
  box-shadow: "rgb(0 0 0 / 50%) 0px 0px 18px 0px)";
  border: 1px solid rgba(151, 151, 151, 0.34);
  cursor: pointer;
  height: 260px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  a {
    color: ${({ theme }) => theme.mainText};
  }

  :hover {
    border: ${({ theme }) => theme.borderHover};
  }
`;

export const ItemsFlex = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
  padding-top: 60px;
`;

export const ItemTitle = styled.div`
  font-family: "Studio-Feixen-Sans Black";
  font-size: 23px;
  margin-top: 20px;
`;

export const ItemDescription = styled.div`
  margin-top: 20px;
  line-height: 1.7;
`;
