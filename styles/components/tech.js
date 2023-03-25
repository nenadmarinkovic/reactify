import styled from "styled-components";

export const TechWrap = styled.div`
  transition: all 0.25s linear;
  background: ${({ theme }) => theme.background};
  padding: 60px 0 20px;
  position: relative;
  z-index: 1;
`;

export const TechContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 150px;

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
