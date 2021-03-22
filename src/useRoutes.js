import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import ApartmentsPage from "./components/apartaments/ApartmentsPage";
import SignInPage from "./components/signIn/SignInPage";
import SignUpPage from "./components/signUp/SignUpPage";
import WhyUsPage from "./components/whyUs/WhyUsPage";
import HotelsInCity from "./components/hotelsInCity/HotelsInCityPage";

import ROUTES from "./routes";

const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path={ROUTES.HOME} exact>
          <HomePage />
        </Route>
        <Route path={ROUTES.APARTMENTS} exact>
          <ApartmentsPage />
        </Route>
        <Route path={ROUTES.WHYUS} exact>
          <WhyUsPage />
        </Route>
        <Route path={ROUTES.HOTELSINCITY} exact>
          <HotelsInCity />
        </Route>
        <Redirect to={ROUTES.HOME} />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route path={ROUTES.REGISTER}>
        <SignUpPage />
      </Route>
      <Route path={ROUTES.LOGIN}>
        <SignInPage />
      </Route>
      <Redirect to={ROUTES.LOGIN} />
    </Switch>
  );
};

export default useRoutes;
