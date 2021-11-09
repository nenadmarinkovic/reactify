import styled from "styled-components";

export const ApisContainer = styled.div`
  transition: all 0.25s linear;
  text-align: center;
  padding: 20px 0;
  padding-top: 80px;
  background-color: #2a3ce0;
`;

export const ApisFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 80px;
`;

export const ApisTitle = styled.div`
  color: #fff;
  font-size: 3.525rem;
  font-family: "Studio-Feixen-Sans Black";
  text-align: center;
  padding: 80px 120px 60px 120px;
`;

export const ApisBox = styled.div`
  transition: all 0.25s linear;
  text-align: start;
  width: 40%;
  border-radius: 10px;
  color: white;
`;

export const ApisSVG = styled.div``;

export const UpText = styled.div`
  font-size: 1.325rem;
  font-family: "Studio-Feixen-Sans Black";
  margin: 10px 0;
  color: #fff;
`;

export const DownText = styled.div`
  font-size: 1rem;
  font-family: "Studio-Feixen-Sans Book";
  line-height: 1.7;
  margin: 10px 0;
  color: #fff;
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
