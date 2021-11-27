import { useCharacters } from "../../Providers/Characters";
import {
  CharacterContainer,
  Card,
  Text,
  SecondContainer,
  CardContainer,
  Button,
} from "./styles";
import { useHistory } from "react-router-dom";

function CharacterSelect() {
  const { characters, setAvatar, avatar } = useCharacters();
  console.log(avatar);
  const history = useHistory();

  const handleClick = (character) => {
    setAvatar(character.image);
    history.push("/subjects");
  };

  return (
    <CharacterContainer>
      <Text>Selecione seu personagem</Text>
      <SecondContainer>
        <CardContainer>
          {characters.map((character) => (
            <Card
              onClick={() => handleClick(character)}
              characterImage={character.image}
            />
          ))}
        </CardContainer>
      </SecondContainer>
    </CharacterContainer>
  );
}

export default CharacterSelect;
