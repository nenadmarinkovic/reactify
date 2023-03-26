import styled from "styled-components";

export const FooterContainer = styled.div`
  background: ${({ theme }) => theme.bannerBackground};
  padding: 50px 0 30px 0;
  text-align: center;
`;

export const Copyright = styled.div`
  color: ${({ theme }) => theme.mainText};
  line-height: 1.8;

  a {
    margin-left: 5px;
    color: ${({ theme }) => theme.mainText};

    :hover {
      color: ${({ theme }) => theme.helperText};
    }
  }
`;
