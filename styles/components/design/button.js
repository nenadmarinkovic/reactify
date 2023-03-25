import styled from "styled-components";

export const ButtonFlex = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  margin: 3px;
  background-color: ${({ theme }) => theme.helperText};
  border: 2px solid ${({ theme }) => theme.helperText};
  display: inline-block;
  color: ${({ theme }) => theme.reversedText};
  padding: 8px 20px;
  font-size: 0.75rem;
  font-weight: bold;
  border-radius: 20px;
  transition: 0.3s;
  cursor: pointer;

  :hover {
    border: ${({ theme }) => theme.activeButtonBorder} !important;
    color: ${({ theme }) => theme.helperText} !important;
    background: transparent !important;
  }
`;
