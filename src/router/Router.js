import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LoginPage from '../views/Login/LoginPage';

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/login">
                    <LoginPage/>                
                </Route>
                {/* <Route exact path="/cadastrar">
                </Route> */}
                
            </Switch>
        </BrowserRouter>
    );
}

export default Router;