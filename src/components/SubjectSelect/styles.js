import styled from "styled-components";

export const WhiteContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: white;
`;
export const SubjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 50px;
  width: 100%;
  color: black;
  border-radius: 8px;
`;

export const CardSubject = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 auto;
  border: 1px solid black;
  border-radius: 8px;
  height: 70px;
  color: black;
  width: 300px;
  margin-bottom: 20px;
`;
export const ImageSubject = styled.img`
  width: 50px;
  height: 50px;
  margin: 0 30px 0 30px;
`;

export const Subject = styled.p`
  color: black;
  font-size: 20px;
  font-weight: 600;
`;

export const Picture = styled.figure`
  height: 50px;
  margin: 5px 5px 0 5px;
  padding: 0;
  width: 50px;
  border-radius: 50%;
  background: url(${(props) => props.characterImage}) no-repeat center;
  background-size: 50px;
`;

export const UserName = styled.p`
  color: black;
  font-size: 20px;
  font-weight: 800;
`;
