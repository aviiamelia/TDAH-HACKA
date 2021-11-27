import styled from "styled-components";

export const CharacterContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  min-height: 100vh;
  align-items: center;
  background-color: white;
  width: 100vw;
`;

export const SecondContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100vw;
  justify-content: space-around;
`;

export const Text = styled.h2`
  width: 100%;
  color: black;
  text-align: center;
  margin-bottom: 45px;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  width: 100vw;
`;

export const Card = styled.div`
  background: url(${(props) => props.characterImage}) no-repeat center;
  background-size: 130px;
  height: 230px;
  width: 100px;
  border-radius: 15px;
  border: 2px solid black;
  :hover {
    border: 5px solid red;
  }
`;

export const Button = styled.button`
  border: none;
  color: white;
  font-weight: 600;
  margin: 0 auto;
  margin-top: 45px;
  font-size: 15px;
  background-color: ${(props) => (props.register ? "gray" : "#054092")};
  border-radius: 15px;
  margin-bottom: 15px;
  width: 230px;
  height: 40px;
`;
