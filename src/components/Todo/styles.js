import styled from "styled-components";

export const ToContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 400px;
`;
export const Cards = styled.div`
  color: black;
  font-size: 20px;
  border: 2px solid black;
  border-radius: 8px;
  margin-bottom: 5px;
  height: 50px;
  width: 200px;
  line-height: 50px;
  font-weight: 600;
  text-align: center;
  position: relative;
  button {
    position: absolute;
    border: none;
    margin: 0;
    padding: 0;
    font-size: 20px;
    top: 2%;
    right: 1%;
  }
`;
export const AddTodo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  span {
    margin: 0;
    padding: 0;
    font-size: 28px;
    line-height: 10px;
    color: black;
  }
  p {
    color: black;
    font-size: 25px;
  }
`;
export const TodoModal = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 180px;
  width: 280px;
  top: 20%;
  left: 11%;
  border: 2px solid black;
  border-radius: 8px;
  background-image: linear-gradient(yellow, #ff6833 80%);

  div {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    height: 20px;
    width: 100%;
    span {
      font-size: 25px;
      color: red;
    }
  }
  input {
    color: black;
    width: 70%;
    font-size: 25px;
    height: 40px;
    border: 2px solid black;
    border-radius: 8px;
  }
  button {
    border: none;
    width: 80px;
    border-radius: 8px;
    margin-bottom: 5px;
    height: 35px;
    background-color: #054092;
    color: white;
  }
`;
