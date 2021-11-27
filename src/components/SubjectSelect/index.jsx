import {
  WhiteContainer,
  UserContainer,
  Picture,
  SubjectsContainer,
  CardSubject,
  UserName,
} from "./styles";
import { useCharacters } from "../../Providers/Characters";

function SubjectSelector() {
  const { user, avatar } = useCharacters();
  console.log(user);
  return (
    <WhiteContainer>
      <UserContainer>
        <Picture characterImage={avatar} />
        <UserName>{user}</UserName>
      </UserContainer>
      <SubjectsContainer>
        {[1, 2, 3].map((card) => (
          <CardSubject />
        ))}
      </SubjectsContainer>
    </WhiteContainer>
  );
}

export default SubjectSelector;
