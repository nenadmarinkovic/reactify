import styled from "styled-components";

export const HeaderWrap = styled.div`
  position: fixed;
  width: 100%;
  transition: all 0.25s linear;
  background: ${({ theme }) => theme.background};
  height: 80px;
  z-index: 3;
  border-bottom: 1px solid #f7f7f7;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  width: 100%;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
`;
export const LogoName = styled.div`
  font-family: "Studio-Feixen-Sans Bold";
  margin-left: 5px;
  color: ${({ theme }) => theme.mainText};
`;

export const HeaderFlex = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderLinks = styled.div`
  display: flex;
  padding-bottom: 7px;
  margin-right: 10px;

  @media (max-width: 680px) {
    display: none;
  }
`;

export const HeaderLink = styled.div`
  margin-right: 20px;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  color: ${({ theme }) => theme.mainText};

  a {
    color: ${({ theme }) => theme.mainText};
  }

  :hover {
    background: ${({ theme }) => theme.switchHover};
  }
`;
