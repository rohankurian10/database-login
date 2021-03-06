import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import Registration from "../Auth/Registration/Registration";
import Login from "../Auth/Login/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/registration">
            <Registration />
          </Route>
        </Switch>
      </>
    </BrowserRouter>
  );
};

export default Router;
