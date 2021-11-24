import styled from "styled-components";

export const TechWrap = styled.div`
  transition: all 0.25s linear;
  background: ${({ theme }) => theme.background};
  padding: 20px 0;
`;

export const TechContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 1080px) {
    flex-wrap: wrap;
  }
`;

export const Logo = styled.img`
  pointer-events: none;

  @media (max-width: 1080px) {
    margin: 20px;
  }
`;
