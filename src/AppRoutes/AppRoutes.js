import React from "react";
import { Switch, Route } from "react-router-dom";
import FormContainer from "../Form/FormContainer/FormContainer";
import ListContainer from "../List/ListContainer/ListContainer";

export default function AppRoutes() {
  return (
    <Switch>
      <Route path="/form/formName/:rowId" component={FormContainer} />
      <Route exact path="/" component={ListContainer} />
    </Switch>
  );
}
