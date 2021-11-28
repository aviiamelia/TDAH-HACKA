import { useCharacters } from "../../Providers/Characters";
import {
  CharacterContainer,
  Text,
  SecondContainer,
  CardContainer,
  Image,
  ArrowRight,
  ArrowLeft,
  BioText,
} from "./styles";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { useEffect } from "react";
function CharacterSelect() {
  const { characters, setAvatar, avatar, user } = useCharacters();
  console.log(avatar);
  const history = useHistory();
  const [counter, setCounter] = useState(0);

  const handleClick = (character) => {
    setAvatar(character[counter].image);
    history.push("/subjects");
  };
  useEffect(() => {
    if (user === null) {
      history.push("/");
    }
  }, [user, history]);
  return (
    <CharacterContainer>
      <Text>Escolha seu Avatar:</Text>
      <SecondContainer>
        <CardContainer>
          <Image
            onClick={() => handleClick(characters)}
            src={characters[counter].image}
          />
          <BioText>{characters[counter].bio}</BioText>
        </CardContainer>
      </SecondContainer>
      {counter < 2 ? (
        <ArrowRight
          onClick={counter < 2 ? () => setCounter(counter + 1) : null}
        >
          <AiOutlineArrowRight />
        </ArrowRight>
      ) : null}
      {counter > 0 ? (
        <ArrowLeft onClick={counter > 0 ? () => setCounter(counter - 1) : null}>
          <AiOutlineArrowLeft />
        </ArrowLeft>
      ) : null}
    </CharacterContainer>
  );
}

export default CharacterSelect;
