import styled from "styled-components";

export const ApisContainer = styled.div`
  padding-top: 300px;
  background-color: #2a3ce0;
  height: 500px;
`;

export const ApisBox = styled.div`
  padding-top: 380px;
  background: ${({ theme }) => theme.itemBackground};
  border-radius: 10px;
  margin-top: -500px;
`;

export const ApisFlex = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 40px;
`;

export const ApisItem = styled.div`
  background: ${({ theme }) => theme.itemBackground};
  border-radius: 10px;
  height: 120px;
  width: 48%;
`;
