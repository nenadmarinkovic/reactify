import styled from "styled-components";

export const DesignContainer = styled.div`
  padding-top: 300px;
  background-color: #2a3ce0;
`;

export const DesignBox = styled.div`
  padding-top: 380px;
  background: ${({ theme }) => theme.itemBackground};
  border-radius: 10px;
  margin-top: -500px;
`;

export const DesignFlex = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 40px;
`;

export const DesignItem = styled.div`
  background: ${({ theme }) => theme.itemBackground};
  border-radius: 10px;
  height: 120px;
  width: 48%;
`;
