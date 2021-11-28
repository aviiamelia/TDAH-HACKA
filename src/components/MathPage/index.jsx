import pomodoro from "../../assets/pomodoro.png";
import {
  Container,
  Image,
  ProblemContainer,
  SquareContainer,
  Squares,
} from "./styles";
import {
  UserContainer,
  Picture,
  UserName,
} from "../../components/SubjectSelect/styles";
import { useCharacters } from "../../Providers/Characters";
function MathContainer() {
  const { user, avatar } = useCharacters();
  return (
    <Container>
      <UserContainer>
        <Picture characterImage={avatar} />
        <UserName>{user}</UserName>
      </UserContainer>
      <ProblemContainer>
        <h3>Com sete algarismo quatro, chege ao resultado indicado</h3>
      </ProblemContainer>
      <SquareContainer>
        {[1, 2, 3, 4, 5, 6, 7].map((number) => (
          <>
            {number < 7 ? (
              <>
                <Squares />+
              </>
            ) : (
              <Squares />
            )}
          </>
        ))}
        = <Squares>100</Squares>
      </SquareContainer>
      <Image src={pomodoro} />
    </Container>
  );
}

export default MathContainer;
