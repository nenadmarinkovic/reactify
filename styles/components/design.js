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

export const DesignItem = styled.div`
  transition: all 0.25s linear;
  background: ${({ theme }) => theme.itemBackground};
  height: 250px;
  width: 300px;
  margin-bottom: 40px;
  border-radius: 10px;
  border: ${({ theme }) => theme.borderHover};
`;

export const DesignItems = styled.div`
  display: flex;
  justify-content: space-between;
`;
