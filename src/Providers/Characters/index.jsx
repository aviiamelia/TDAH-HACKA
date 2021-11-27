import { createContext, useContext, useState } from "react";
import charlie from "../../assets/Charlie.png";
import capa from "../../assets/capa.png";
import girl from "../../assets/Group.png";

const CharactersContext = createContext();

export const CharacterProvider = ({ children }) => {
  const [characters, setCharacter] = useState([
    {
      name: "charlie",
      image: charlie,
    },
    {
      name: "Kira",
      image: girl,
    },
    {
      name: "Beco",
      image: capa,
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
