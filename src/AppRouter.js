import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Login from './components/Login';
import Signup from './components/Signup';
import ShortLinkRedirect from './components/ShortLinkRedirect';
import NavBar from './components/NavBar';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route 
                    path="/:hash"
                    render={props => (
                        <ShortLinkRedirect hash={props.match.params.hash} />
                    )}
                />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;