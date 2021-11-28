import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: white;
  align-items: center;
  justify-content: space-space-evenly;
  position: relative;
`;

export const Image = styled.img`
  position: absolute;
  height: 100px;
  width: 100px;
  right: 5%;
  top: 10%;
`;

export const Image2 = styled.img`
  height: 20px;
  width: 20px;
`;

export const ProblemContainer = styled.div`
  margin-top: 100px;
  h3 {
    font-weight: 600;
    margin-bottom: 25px;
    color: black;
    text-align: center;
    width: 100%;
    height: 50px;
  }
`;
export const Cont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Cont2 = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;
export const SquareContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: center;
  max-width: 300px;
  color: black;
  font-size: 25px;
`;

export const Squares = styled.div`
  flex: 1;
  border: 1px solid black;
  width: 28px;
  height: 28px;
  margin-right: 15px;
  margin-bottom: 15px;
  border-radius: 5px;
  font-size: 15px;
  line-height: 25px;
  text-align: center;
`;

export const Lines = styled.div`
  border: 1px solid black;

  width: 200px;

  margin-bottom: 15px;
`;
