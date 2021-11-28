import styled from "styled-components";

export const CharacterContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  min-height: 100vh;
  align-items: center;
  background-image: linear-gradient(yellow, #ff6833 80%);
  width: 100vw;
  position: relative;
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
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
`;

export const Image = styled.img`
  height: 230px;
  margin-left: 8px;
  width: 130px;
  :hover {
    border: 3px solid red;
  }
`;
export const ArrowRight = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  position: absolute;
  color: black;
  font-size: 45px;
  bottom: 25%;
  right: 5%;
`;
export const ArrowLeft = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  position: absolute;
  color: black;
  font-size: 45px;
  bottom: 25%;
  left: 5%;
`;

export const BioText = styled.div`
  color: black;
  font-size: 15px;
  font-weight: 700;
  width: 160px;
  height: 100px;
  position: absolute;
  right: 10%;
  bottom: 50%;
`;
