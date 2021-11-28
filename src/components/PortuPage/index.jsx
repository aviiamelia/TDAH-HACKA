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
    {pri:"RU", seg:"CO", ter:"JA"},
    {pri:"RI", seg:"LA", ter:"GO"},
    {pri:"CA", seg:"TU", ter:"NO"}
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
        {silabas.map((card) => (
          <>
            <div>
              <Squares>{card.pri}</Squares>
              <Squares>{card.seg}</Squares>
              <Squares>{card.ter}</Squares>
            </div>
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
