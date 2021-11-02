import styled from "styled-components";

export const TechWrap = styled.div`
  transition: all 0.25s linear;
  background: ${({ theme }) => theme.background};
  padding: 40px 0 40px 0;
`;

export const TechContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const Logo = styled.img`

`;