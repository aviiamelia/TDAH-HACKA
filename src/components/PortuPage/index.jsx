import pomodoro from "../../assets/pomodoro.png";
import lapis from "../../assets/lapis.png";
import {
  Container,
  Image,
  Image2,
  ProblemContainer,
  SquareContainer,
  Squares,
  Lines,
  Cont,
  Cont2,
} from "./styles";
import { Button } from "../Login/styles";
import {
  UserContainer,
  Picture,
  UserName,
} from "../../components/SubjectSelect/styles";
import { useCharacters } from "../../Providers/Characters";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
function PortuContainer() {
  const { user, avatar } = useCharacters();
  const history = useHistory();
  const silabas = [
    { pri: "RU", seg: "CO", ter: "JA" },
    { pri: "RI", seg: "LA", ter: "GO" },
    { pri: "CA", seg: "TU", ter: "NO" },
  ];
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
      <ProblemContainer>
        <h3>Organize as sílabas e escreva as palavras</h3>
      </ProblemContainer>
      <SquareContainer>
        {silabas.map((card) => (
          <Cont>
            <Cont2>
              <Squares>{card.pri}</Squares>
              <Squares>{card.seg}</Squares>
              <Squares>{card.ter}</Squares>
            </Cont2>
            <Image2 src={lapis} />
            <Lines />
          </Cont>
        ))}
      </SquareContainer>
      <Image src={pomodoro} />
      <Button onClick={() => history.push("/subjects")} margin="25px">
        Pronto
      </Button>
    </Container>
  );
}

export default PortuContainer;
