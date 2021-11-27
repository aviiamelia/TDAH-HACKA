import styled from "styled-components";
import image from "../../assets/Kira.png";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  background-image: linear-gradient(yellow, #ff6833 80%);
`;
export const ImageContainer = styled.div`
  min-height: 300px;
  margin-top: 25px;
  width: 100%;
  background: url(${image}) no-repeat center;
  background-size: 300px;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 300px;
  align-items: center;
`;
export const Input = styled.input`
  height: 30px;
  margin-bottom: 5px;
  background: white;
  border: none;
  color: black;
  width: 230px;
  ::placeholder {
    color: black;
    opacity: 1;
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.button`
  border: none;
  color: white;
  font-weight: 600;
  font-size: 15px;
  background-color: ${(props) => (props.register ? "gray" : "#054092")};
  border-radius: 15px;
  margin-bottom: 15px;
  width: 230px;
  height: 40px;
`;
