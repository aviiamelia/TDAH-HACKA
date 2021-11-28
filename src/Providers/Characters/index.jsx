import { createContext, useContext, useState } from "react";
import charlie from "../../assets/Charlie.png";
import capa from "../../assets/capa.png";
import girl from "../../assets/Group.png";

const CharactersContext = createContext();

export const CharacterProvider = ({ children }) => {
  const [characters, setCharacter] = useState([
    {
      name: "Beco",
      image: capa,
      bio: "Beco tem 7 anos e foi recém diagnosticado com TDAH e se comparou a um super heroi por ser diferente dos demais amiguinhos.",
    },
    {
      name: "charlie",
      image: charlie,
      bio: "Charlie de 11 anos tem o TDAH e sonha em ser astronauta para explorar o espaço e conhecer a lua.",
    },
    {
      name: "Kira",
      image: girl,
      bio: "Kira tem 9 anos e quer ser jogadora de futebol como seu maior ídolo, Steve Naismith, jogador escocês, dislexo como ela.",
    },
  ]);
  const [user, setUser] = useState(null);
  const [avatar, setAvatar] = useState(null);

  return (
    <CharactersContext.Provider
      value={{ characters, setCharacter, user, setUser, avatar, setAvatar }}
    >
      {children}
    </CharactersContext.Provider>
  );
};

export const useCharacters = () => useContext(CharactersContext);
