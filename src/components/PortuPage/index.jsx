import pomodoro from "../../assets/pomodoro.png";
import lapis from "../../assets/lapis.png";
import {
  Container,
  Image,
  Image2,
  ProblemContainer,
  SquareContainer,
  Squares, Lines
} from "./styles";
import {
  UserContainer,
  Picture,
  UserName,
} from "../../components/SubjectSelect/styles";
import { useCharacters } from "../../Providers/Characters";
function PortuContainer() {
  const { user, avatar } = useCharacters();
  const silabas = [
    ["RU", "CO", "JA"],
    ["RI", "LA", "GO"],
    ["CA", "TU", "NO"]
  ];
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
      <div>
        {[1, 2, 3].map((number, silabas) => (
          <>
            <Squares>{}</Squares>
            <Squares>{}</Squares>
            <Squares>{}</Squares>
            <Image2 src={lapis}/>
            <Lines/> 
          </>
        ))}
      </div>  
      </SquareContainer>
      <Image src={pomodoro} />
    </Container>
  );
}

export default PortuContainer;
