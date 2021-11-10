import styled from "styled-components";

export const DesignWrap = styled.div`
  transition: all 0.25s linear;
  background: ${({ theme }) => theme.designBackground};
`;

export const DesignFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 120px;
`;

export const DesignItem = styled.a`
  transition: all 0.25s linear;
  background: ${({ theme }) => theme.itemBackground};
  color: ${({ theme }) => theme.mainText};
  padding: 40px 30px;
  text-align: center;
  border-radius: 10px;
  cursor: pointer;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 30%;
  margin-bottom: 45px;
  box-shadow: "rgb(0 0 0 / 50%) 0px 0px 18px 0px)";
  border: 1px solid rgba(151, 151, 151, 0.34);

  :hover {
    border: ${({ theme }) => theme.borderHover};
  }
`;

export const DesignItems = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
