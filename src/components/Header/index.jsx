import { Heading, CardsHeader } from "./styles";
import { useHistory } from "react-router-dom";

function Header({ children }) {
  const history = useHistory();
  return (
    <Heading>
      <CardsHeader onClick={() => history.push("/")}>Home</CardsHeader>
      <CardsHeader onClick={() => history.push("/chat")}>Chat</CardsHeader>
      <CardsHeader onClick={() => history.push("/forum")}>Forum</CardsHeader>
    </Heading>
  );
}

export default Header;
