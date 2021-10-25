import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LoginPage from '../views/Login/LoginPage';
import AccountPage from '../views/Account/Account';
const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <LoginPage />
                </Route>
                <Route exact path="/account">
                    <AccountPage />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;