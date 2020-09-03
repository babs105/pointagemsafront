import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";
import { getCookie } from "../utils/Cookie";
const Authentication = () =>
  getCookie("APPPTNMSA_COOKIE") ? (
    // <Redirect to="/app" />
    <PrivateRoutes />
  ) : (
    <PublicRoutes />
  );
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Authentication} />
        <Route render={Authentication} />
      </Switch>
    </BrowserRouter>
  );
};
export default AppRouter;
