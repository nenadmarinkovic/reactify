import styled from "styled-components";

export const DesignWrap = styled.div`
  background: ${({ theme }) => theme.designBackground};
`;

export const DesignFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 120px;

  @media (max-width: 560px) {
    padding-bottom: 30px;
  }
`;

export const DesignItem = styled.a`
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
  width: 295px;
  margin-bottom: 45px;
  box-shadow: "rgb(0 0 0 / 50%) 0px 0px 18px 0px)";
  border: 1px solid rgba(151, 151, 151, 0.34);

  @media (max-width: 1080px) {
    width: 45%;
  }

  @media (max-width: 768px) {
    height: 280px;
  }

  @media (max-width: 560px) {
    width: 100%;
  }

  :hover {
    border: ${({ theme }) => theme.borderHover};
  }
`;

export const DesignItems = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
