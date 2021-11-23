import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.bannerBackground};
  transition: all 0.25s linear;
  padding-bottom: 120px;
`;

export const Image = styled.div``;

export const ContainerFlex = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Text = styled.div`
  color: ${({ theme }) => theme.mainText};
  font-size: 1.3rem;
  font-family: "Studio-Feixen-Sans Book";
  line-height: 1.7;
  margin: 10px 0;
  width: 60%;
  margin-top: 0;

  p {
    margin-top: 0;
  }

  a {
    color: ${({ theme }) => theme.helperText};
  }
`;
