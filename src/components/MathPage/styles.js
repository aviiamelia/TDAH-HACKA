import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: white;
  position: relative;
`;

export const Image = styled.img`
  position: absolute;
  height: 100px;
  width: 100px;
  right: 5%;
  top: 10%;
`;

export const ProblemContainer = styled.div`
  margin-top: 100px;
  h3 {
    font-weight: 600;
    margin-left: 10px;
    color: black;
    width: 400px;
    height: 50px;
  }
`;
export const SquareContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  margin-right: 3px;
  margin-top: 20px;
  color: black;
  font-size: 25px;
`;

export const Squares = styled.div`
  border: 1px solid black;
  font-size: 15px;
  line-height: 25px;
  width: 28px;
  height: 28px;
`;
