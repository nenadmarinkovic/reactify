import styled from "styled-components";

export const PostsContainer = styled.div`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.mainText};
`;

export const PostsFlex = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 60px 0 180px 0;

  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

export const PostItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 42%;
  margin-bottom: 65px;

  @media (max-width: 720px) {
    width: 100%;
  }

  p {
    width: 320px;
    line-height: 1.8;
    margin: 10px 0;
  }
`;

export const PostTitle = styled.div`
  font-family: "Studio-Feixen-Sans Black";
  font-size: 18px;
  margin-top: 25px;
`;

export const PostImage = styled.img`
  height: 285px;
  border-radius: 10px;
`;

export const Centered = styled.div`
  font-family: "Studio-Feixen-Sans Book";
  font-size: 1.3rem;
  padding: 15px 0 25px 0;
  text-align: center;
  color: ${({ theme }) => theme.mainText};
  line-height: 1.7;
`;
