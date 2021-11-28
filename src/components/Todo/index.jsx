import { UserContainer, Picture, UserName } from "../SubjectSelect/styles";
import { Container } from "../PortuPage/styles";
import { useCharacters } from "../../Providers/Characters";
import { useHistory } from "react-router-dom";
import { ToContainer, Cards, AddTodo, TodoModal } from "./styles";
import { FiPlus } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { useState, useEffect } from "react";

function TodoContainer() {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const [todo, setTodo] = useState("");
  const { user, avatar, todoList, setTodoList } = useCharacters();
  const handleTodo = () => {
    if (todo) {
      setTodoList([...todoList, todo]);
      setIsOpen(!isOpen);
      setTodo("");
    }
  };
  const removeTodo = (todo) => {
    const newList = todoList.filter((item) => item !== todo);
    setTodoList(newList);
  };
  useEffect(() => {
    if (user === null) {
      history.push("/");
    }
  }, [user, history]);

  return (
    <Container>
      <UserContainer>
        <Picture characterImage={avatar} />
        <UserName>{user}</UserName>
      </UserContainer>
      <ToContainer>
        {todoList.map((todo, index) => (
          <Cards>
            {todo}
            <button onClick={() => removeTodo(todo)}>
              <GrClose />
            </button>
          </Cards>
        ))}

        <AddTodo onClick={() => setIsOpen(!isOpen)}>
          <span>
            <FiPlus />
          </span>
          <p>Adicionar tarefa</p>
        </AddTodo>
      </ToContainer>
      {isOpen && (
        <TodoModal>
          <div>
            <span onClick={() => setIsOpen(!isOpen)}>
              <GrClose />
            </span>
          </div>
          <input
            value={todo}
            type="text"
            onChange={(e) => setTodo(e.target.value)}
            placeholder="digite sua tarefa"
          />
          <button onClick={handleTodo}>add tarefa</button>
        </TodoModal>
      )}
    </Container>
  );
}

export default TodoContainer;
