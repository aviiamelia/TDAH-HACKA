import pomodoro from "../../assets/pomodoro.png";
import {
  Container,
  ImagePomo,
  ProblemContainer,
  SquareContainer,
  Squares,
} from "./styles";
import {
  UserContainer,
  Picture,
  UserName,
} from "../../components/SubjectSelect/styles";
import { Button } from "../Login/styles";
import { useCharacters } from "../../Providers/Characters";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import PomoModal from "../PomoModal";
import { AiOutlineClose } from "react-icons/ai";
import { Span } from "../PortuPage/styles";
function MathContainer() {
  const history = useHistory();
  const { user, avatar } = useCharacters();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (user === null) {
      history.push("/");
    }
  }, [user, history]);
  return (
    <>
      {isOpen && (
        <PomoModal>
          <Span onClick={() => setIsOpen(!isOpen)}>
            <AiOutlineClose />
          </Span>
        </PomoModal>
      )}
      <Container>
        <span
          style={{ color: "black", fontSize: "25px" }}
          onClick={() => history.push("/subjects")}
        >
          <IoMdArrowBack />
        </span>
        <UserContainer>
          <Picture characterImage={avatar} />
          <UserName>{user}</UserName>
        </UserContainer>
        <ProblemContainer>
          <h3>Com sete algarismo quatro, chegue ao resultado indicado</h3>
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
        <ImagePomo onClick={() => setIsOpen(!isOpen)} src={pomodoro} />
        <Button margin="50px">pronto</Button>
      </Container>
    </>
  );
}

export default MathContainer;
