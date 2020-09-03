import React, { Fragment } from "react";
import Header from "../components/ui/Header";
import { Route, Switch } from "react-router-dom";
import UserPage from "../components/UserPage";
import EntreesPage from "../components/EntreePage";
import SortiePage from "../components/SortiePage";
import DashboardPage from "../components/DashboardPage";
import PersonnelPage from "../components/PersonnelPage";
import RapportPage from "../components/RapportPage";

const PrivateRoutes = () => {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route path="/" exact component={DashboardPage} />
        <Route path="/users" exact component={UserPage} />
        <Route path="/entrees" exact component={EntreesPage} />
        <Route path="/sorties" exact component={SortiePage} />
        <Route path="/personnel" exact component={PersonnelPage} />
        <Route path="/rapport" exact component={RapportPage} />
      </Switch>
    </Fragment>
  );
};
export default PrivateRoutes;
