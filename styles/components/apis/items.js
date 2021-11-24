import styled from "styled-components";

export const ItemsContainer = styled.div`
  background: ${({ theme }) => theme.background};
  transition: all 0.25s linear;
`;

export const Item = styled.div`
  background: ${({ theme }) => theme.itemBackground};
  color: ${({ theme }) => theme.mainText};
  width: 295px;
  margin-bottom: 40px;
  padding: 30px;
  text-align: center;
  border-radius: 10px;
  box-shadow: "rgb(0 0 0 / 50%) 0px 0px 18px 0px)";
  border: 1px solid rgba(151, 151, 151, 0.34);
  cursor: pointer;
  height: 210px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: 720px) {
    width: 100%;
  }

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
  padding: 60px 0 180px 0;

  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

export const ItemTitle = styled.div`
  font-family: "Studio-Feixen-Sans Black";
  font-size: 23px;
`;

export const ItemDescription = styled.div`
  margin-top: 20px;
  line-height: 1.7;
`;
