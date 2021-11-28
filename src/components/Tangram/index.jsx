import { UserContainer, Picture, UserName } from "../SubjectSelect/styles";
import { Container } from "../PortuPage/styles";
import { useCharacters } from "../../Providers/Characters";
import { TangramContainer, Image } from "./styles";
import tangram from "../../assets/tangram.png";
import puzzle from "../../assets/puzzleTangram.png";
import { Button } from "../Login/styles";
import { useHistory } from "react-router-dom";
import { ImagePomo } from "../MathPage/styles";
import pomodoro from "../../assets/pomodoro.png";
import { useEffect } from "react";
function Tangram() {
  const history = useHistory();
  const { user, avatar } = useCharacters();
  useEffect(() => {
    if (user === null) {
      history.push("/");
    }
  }, [user, history]);
  return (
    <Container>
      <UserContainer>
        <Picture characterImage={avatar} />
        <UserName>{user}</UserName>
      </UserContainer>
      <h2 style={{ color: "black", margin: "20px 0 0 0" }}>Tangram</h2>
      <TangramContainer>
        <Image src={tangram} />
        <Image src={puzzle} />
      </TangramContainer>
      <ImagePomo src={pomodoro} />
      <Button onClick={() => history.push("/subjects")} margin="25px">
        pronto
      </Button>
    </Container>
  );
}

export default Tangram;
