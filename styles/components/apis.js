import styled from "styled-components";

export const ApisContainer = styled.div`
  padding-top: 300px;
  background-color: #2a3ce0;
  height: 600px;
`;

export const ApisBox = styled.div`
  padding-top: 380px;
  background: ${({ theme }) => theme.itemBackground};
  border-radius: 10px;
  margin-top: -500px;
  margin-left: 15px;
  margin-right: 15px;
`;

export const ApisFlex = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
`;

export const ApisItem = styled.div`
  margin-left: 15px;
  margin-right: 15px;
  background: ${({ theme }) => theme.itemBackground};
  border-radius: 10px;
  height: 120px;
  width: 48.5%;
`;
