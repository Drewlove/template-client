import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import AboutPage from "../AboutPage/AboutPage";
import ProfileContainer from "../ProfileContainer/ProfileContainer";
import ProfileForm from "../ProfileForm/ProfileForm";
import ListContainer from "../List/ListContainer/ListContainer";
import LoadingPage from "../LoadingPage/LoadingPage";
import ProtectedRoute from "../Authentication/ProtectedRoute/ProtectedRoute";
import { useAuth0 } from "@auth0/auth0-react";

export default function Routes() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <Switch>
      <Route path="/home" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/app/profile/form/:auth0SubID" component={ProfileForm} />
      <ProtectedRoute path="/app/profile" component={ProfileContainer} />

      {/* <Route path="/app/form/profile/:rowId" component={ProfileForm} /> */}
      {/* //app/profile/form/60b7f40ec3cd820068a2008d */}
      <Route exact path="/" component={ListContainer} />
    </Switch>
  );
}
