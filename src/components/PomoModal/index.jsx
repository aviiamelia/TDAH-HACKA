import { PomoContainer, Image } from "./styles";
import PomoImage from "../../assets/tomato.png";

function PomoModal({ children }) {
  return (
    <PomoContainer>
      <Image src={PomoImage} />
      {children}
    </PomoContainer>
  );
}

export default PomoModal;
