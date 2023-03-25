import styled from "styled-components";

export const HeaderWrap = styled.div`
  position: fixed;
  width: 100%;
  background: ${({ theme }) => theme.background};
  height: 80px;
  z-index: 3;
  border-bottom: 1px solid ${({ theme }) => theme.additionalBorder};
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
  color: ${({ theme }) => theme.mainText};

  a {
    transition: 0.3s;
    cursor: pointer;
    border-radius: 10px;
    color: ${({ theme }) => theme.mainText};
    padding: 0.75rem;

    :hover {
      background: ${({ theme }) => theme.switchHover};
    }
  }
`;
