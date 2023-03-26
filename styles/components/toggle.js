import styled from "styled-components";

export const ToggleButton = styled.button`
  border: none;
  background: ${({ theme }) => theme.switchBackground};
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
  padding: 10px;

  @media (max-width: 680px) {
    margin-right: 10px;
  }

  :hover {
    background: ${({ theme }) => theme.switchHover};
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;
