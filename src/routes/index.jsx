import { Switch, Route } from "react-router-dom";
import Login from "../components/Login";
import CharacterSelect from "../components/CharacterSelect";
import SubjectSelector from "../components/SubjectSelect/index";
import MathContainer from "../components/MathPage/index";
import PortuContainer from "../components/PortuPage/index";
import Tangram from "../components/Tangram";
import TodoContainer from "../components/Todo";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/subjects">
        <SubjectSelector />
      </Route>
      <Route path="/select">
        <CharacterSelect />
      </Route>
      <Route path="/math">
        <MathContainer />
      </Route>
      <Route path="/portu">
        <PortuContainer />
      </Route>
      <Route path="/tangram">
        <Tangram />
      </Route>
      <Route path="/todo">
        <TodoContainer />
      </Route>
    </Switch>
  );
};

export default Routes;
