import styled from "styled-components";

export const ApisContainer = styled.div`
  transition: all 0.25s linear;
  text-align: center;
  padding: 20px 0;
  padding-top: 80px;
  background-color: #2a3ce0;

  @media (max-width: 560px) {
    padding-top: 30px;
  }
`;

export const ApisFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 80px;

  @media (max-width: 1080px) {
    flex-direction: column;
  }
`;

export const ApisTitle = styled.div`
  color: #fff;
  font-size: 3.525rem;
  font-family: "Studio-Feixen-Sans Black";
  text-align: center;
  padding: 80px 120px 60px 120px;

  @media (max-width: 768px) {
    padding: 80px 20px 60px 20px;
  }

  @media (max-width: 560px) {
    font-size: 2.525rem;
  }
`;

export const ApisBox = styled.div`
  transition: all 0.25s linear;
  text-align: start;
  width: 50%;
  border-radius: 10px;
  color: white;

  @media (max-width: 1080px) {
    width: 100%;
    text-align: center;
  }
`;

export const ApisSVG = styled.div`
  svg {
    width: 100%;
  }
  @media (max-width: 1080px) {
    margin-top: 40px;
  }
`;

export const UpText = styled.div`
  font-size: 1.925rem;
  font-family: "Studio-Feixen-Sans Black";
  margin: 10px 0;
  color: #fff;
`;

export const DownText = styled.div`
  font-size: 1rem;
  font-family: "Studio-Feixen-Sans Book";
  line-height: 1.7;
  margin: 20px 0;
  color: #fff;
`;

export const Spotify = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1080px) {
    justify-content: center;
  }
`;

export const BoldText = styled.span`
  font-family: "Studio-Feixen-Sans Black";
`;

export const SpotifyText = styled.div`
  margin-left: 10px;
  line-height: 1.8;

  a {
    color: white;
    margin-left: 5px;
    transition: all 0.25s linear;

    :hover {
      color: #08d55a;
    }
  }
`;

export const SpotifyIcon = styled.div`
  width: 30px;
  height: 30px;
`;

export const HelperText = styled.div`
  font-size: 23px;
  margin-top: 20px;
  color: white;
`;

export const LearnMore = styled.div`
  font-size: 18px;
  margin-top: 30px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Studio-Feixen-Sans Regular";
  cursor: pointer;

  a {
    color: white;
  }

  svg {
    margin-top: 1px;
    position: relative;
    transition: transform 0.3s ease-in-out;
    transform: translate(17px);

    path {
      fill: white;
    }
  }

  :hover {
    svg {
      transition: transform 0.3s ease-in-out;
      transform: translate(34px);
    }
  }
`;
