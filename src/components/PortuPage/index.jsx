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
  Span,
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
import { IoMdArrowBack } from "react-icons/io";
import { useState } from "react";
import PomoModal from "../PomoModal";
import { AiOutlineClose } from "react-icons/ai";
function PortuContainer() {
  const { user, avatar } = useCharacters();
  const history = useHistory();
  const silabas = [
    { pri: "RU", seg: "CO", ter: "JA" },
    { pri: "RI", seg: "LA", ter: "GO" },
    { pri: "CA", seg: "TU", ter: "NO" },
  ];
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
        <span onClick={() => history.push("/subjects")}>
          <IoMdArrowBack />
        </span>
        <UserContainer>
          <Picture characterImage={avatar} />
          <UserName>{user}</UserName>
        </UserContainer>
        <ProblemContainer>
          <h4
            style={{
              textAlign: "center",
              marginBottom: "15px",
              marginTop: "5px",
            }}
          >
            Organize as sílabas e escreva as palavras
          </h4>
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
        <Image onClick={() => setIsOpen(!isOpen)} src={pomodoro} />
        <Button margin="25px">Pronto</Button>
      </Container>
    </>
  );
}

export default PortuContainer;
