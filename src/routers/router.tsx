import * as React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { AuthPage } from "../components/AuthPage/AuthPage";
import { RoutesName } from "./enumRoute";
import { LayoutWrapper } from "../components/Layout";

export const useRoutes = (isAuth: boolean) => {
    return isAuth ? (
        <Switch>
            <Route path={RoutesName.Layout} exact>
                <LayoutWrapper />
            </Route>
        <Redirect to={RoutesName.Layout} />
        </Switch>
    ) : (
        <Switch>
            <Route path={RoutesName.Auth} exact>
                <AuthPage />
            </Route>
            <Redirect to={RoutesName.Auth} />
        </Switch>
    )
}