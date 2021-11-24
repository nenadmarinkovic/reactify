import styled from "styled-components";

export const FlexContainer = styled.main`
  background: ${({ theme }) => theme.bannerBackground};
  transition: all 0.25s linear;
  display: flex;
  justify-content: space-between;
  padding-bottom: 120px;
`;

export const MainForm = styled.main`
  width: 50%;
  margin: 0;
  font-size: 21px;
  line-height: 1.65;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const FormContainer = styled.form`
  display: grid;
  grid-row-gap: 1em;
`;
export const FormLabel = styled.label`
  color: ${({ theme }) => theme.helperText};
  font-size: 14px;
  font-family: "Studio-Feixen-Sans Bold";
  letter-spacing: 0.3px;
  font-weight: 500;
  text-align: left;
  text-transform: uppercase;
`;

export const FormInput = styled.input`
  margin: 0;
  color: ${({ theme }) => theme.mainText};
  border: 2px solid ${({ theme }) => theme.mainText};
  border-radius: 5px;
  padding: 0.5em;
  vertical-align: middle;
  white-space: normal;
  background: none;
  line-height: 1;
  font-size: 1rem;
`;

export const TextArea = styled.textarea`
  margin: 0;
  border: 2px solid ${({ theme }) => theme.mainText};
  border-radius: 5px;
  color: ${({ theme }) => theme.mainText};
  padding: 0.5em;
  background: none;
  line-height: 1;
  font-size: 1rem;
  font-family: inherit;
  transition: all 0.2s ease;
  height: 180px;
`;

export const Button = styled.button`
  padding: 0.65em 1em;
  color: ${({ theme }) => theme.buttonText};
  border: 2px solid ${({ theme }) => theme.helperText};
  border-radius: 10px;
  cursor: pointer;
  line-height: 1;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.6px;
  transition: all 0.2s ease;
  background: ${({ theme }) => theme.helperText};
`;

export const Error = styled.div`
  background: #ff6961;
  color: #fff;
  margin-top: 16px;
  text-align: center;
  border-radius: 20px;
  padding: 8px;
  font-size: 1rem;
`;

export const Message = styled.p`
  font-size: 16px;
`;
