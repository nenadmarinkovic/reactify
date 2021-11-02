import styled from "styled-components";

export const ButtonFlex = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  margin: 3px;
  background-color: ${({ theme }) => theme.helperText};
  border: ${({ theme }) => theme.helperText};
  display: inline-block;
  color: ${({ theme }) => theme.reversedText};
  padding: 5px 10px;
  font-size: 0.75rem;
  font-weight: bold;
  border-radius: 5px;
  transition: 0.3s;
  cursor: pointer;
`;
