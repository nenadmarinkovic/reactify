import styled from "styled-components";

export const ToggleButton = styled.button`
  border: none;
  box-shadow: ${({ theme }) => theme.switchShadow};
  background: ${({ theme }) => theme.switchBackground};
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
  padding: 5px 10px;
  margin-bottom: 7px;
  
  :hover {
    background: ${({ theme }) => theme.switchHover};
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;
