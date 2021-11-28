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
import { useEffect, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import PomoModal from "../PomoModal";
import { Span } from "../PortuPage/styles";
import { AiOutlineClose } from "react-icons/ai";

function Tangram() {
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
        <span onClick={() => history.push("/subjects")}>
          <IoMdArrowBack />
        </span>
        <UserContainer>
          <Picture characterImage={avatar} />
          <UserName>{user}</UserName>
        </UserContainer>
        <h2
          style={{ color: "black", margin: "20px 0 0 0", textAlign: "center" }}
        >
          Tangram
        </h2>
        <TangramContainer>
          <Image src={tangram} />
          <Image src={puzzle} />
        </TangramContainer>
        <ImagePomo onClick={() => setIsOpen(!isOpen)} src={pomodoro} />
        <Button marginBottom="20px">pronto</Button>
      </Container>
    </>
  );
}

export default Tangram;
