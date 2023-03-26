import styled from "styled-components";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  background: #193AE5;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  height: 65vh;
  text-align: left;
  padding: 80px;
  position: fixed;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  align-items: center;
  z-index: 9;
  border-bottom-left-radius: 10px;
`;

export const MenuItem = styled.div`
  color: white;
  margin-top: 20px;
  cursor: pointer;
  font-size: 18px;

  a {
    color: white;
  }
`;

export const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  position: relative;
  z-index: 10;
  top: -4px;

  @media (min-width: 680px) {
    display: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme }) => theme.mainText};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    z-index: 9;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      background: ${({ open, theme }) => (open ? "white" : theme.mainText)};
    }
    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
      background: ${({ open, theme }) => (open ? "white" : theme.mainText)};
    }
    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      background: ${({ open, theme }) => (open ? "white" : theme.mainText)};
    }
  }
`;
