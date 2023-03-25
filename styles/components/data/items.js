import styled from "styled-components";

export const ItemsContainer = styled.div`
  background: ${({ theme }) => theme.background};
`;

export const Item = styled.span`
  background: ${({ theme }) => theme.itemBackground};
  color: ${({ theme }) => theme.mainText};
  width: 45%;
  margin-bottom: 80px;
  padding: 30px;
  text-align: center;
  border-radius: 10px;
  box-shadow: "rgb(0 0 0 / 50%) 0px 0px 18px 0px)";
  border: 1px solid rgba(151, 151, 151, 0.34);
  cursor: pointer;
  height: 360px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 720px) {
    width: 100%;
    margin-bottom: 40px;
  }

  a {
    color: ${({ theme }) => theme.mainText};
  }

  :hover {
    border: ${({ theme }) => theme.borderHover};
  }
`;

export const ItemsFlex = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
  padding: 60px 0 180px 0;

  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

export const Text = styled.div`
  color: ${({ theme }) => theme.mainText};
  line-height: 1.7;
  font-size: 1.325rem;
`;

export const Logo = styled.img`
  pointer-events: none;
  width: 130px;
`;
