import {
  WhiteContainer,
  UserContainer,
  Picture,
  SubjectsContainer,
  CardSubject,
  UserName,
  ImageSubject,
  Subject,
} from "./styles";
import { useCharacters } from "../../Providers/Characters";
import board from "../../assets/board.png";
import cube from "../../assets/cube.png";
import mathBoard from "../../assets/mathBoard.png";
import todo from "../../assets/todo.png";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

function SubjectSelector() {
  const { user, avatar } = useCharacters();
  const history = useHistory();
  const images = [
    { subject: "Matemática", image: mathBoard, path: "math" },
    { subject: "Português", image: board, path: "portu" },
    { subject: "Raciocínio lógico", image: cube, path: "tangram" },
    { subject: "Lista de tarefas", image: todo, path: "todo" },
  ];
  useEffect(() => {
    if (user === null) {
      history.push("/");
    }
  }, [user, history]);
  return (
    <WhiteContainer>
      <UserContainer>
        <Picture characterImage={avatar} />
        <UserName>{user}</UserName>
      </UserContainer>
      <SubjectsContainer>
        {images.map((card, index) => (
          <CardSubject
            key={index}
            onClick={() => history.push(`/${card.path}`)}
          >
            <ImageSubject src={card.image} />
            <Subject>{card.subject}</Subject>
          </CardSubject>
        ))}
      </SubjectsContainer>
    </WhiteContainer>
  );
}

export default SubjectSelector;
