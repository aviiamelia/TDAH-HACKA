import { useHistory } from "react-router";
import {
  LoginContainer,
  FormContainer,
  ImageContainer,
  Button,
  Input,
  ButtonContainer,
} from "./styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useCharacters } from "../../Providers/Characters";

function Login() {
  const history = useHistory();
  const { setUser } = useCharacters();
  const formSchema = yup.object().shape({
    name: yup.string().required("required field"),
  });

  const handleRegister = (userData) => {
    console.log(userData);
    setUser(userData.name);
    history.push("/select");
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <LoginContainer>
      <ImageContainer />
      <FormContainer onSubmit={handleSubmit(handleRegister)}>
        <Input type="text" placeholder="nome" {...register("name")} />
        {errors.email?.message}
        <ButtonContainer>
          <Button red type="submit">
            Entrar
          </Button>
          <Button register>Cadastro</Button>
        </ButtonContainer>
      </FormContainer>
    </LoginContainer>
  );
}

export default Login;
