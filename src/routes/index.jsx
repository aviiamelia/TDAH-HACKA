import { Switch, Route } from "react-router-dom";
import Forum from "../components/Forum";
import Login from "../components/Login";
import CharacterSelect from "../components/CharacterSelect";
import SubjectSelector from "../components/SubjectSelect/index";
import MathContainer from "../components/MathPage/index";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <CharacterSelect />
      </Route>
      <Route path="/subjects">
        <SubjectSelector />
      </Route>
      <Route path="/forum">
        <Forum />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/math">
        <MathContainer />
      </Route>
    </Switch>
  );
};

export default Routes;
