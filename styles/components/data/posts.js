import styled from "styled-components";

export const PostsContainer = styled.div`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.mainText};
  transition: all 0.25s linear;
  height: 70vh;
`;

export const PostItem = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

export const PostsFlex = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const PostImage = styled.img`
  height: 300px;
  width: 300px;
`;
