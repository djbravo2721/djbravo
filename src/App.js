import React from "react";
import Index from "pages/index";
import Signup from "pages/signup";
import FindRides from "pages/findRides";
import AcceptRides from "pages/acceptRides";
import Page404 from "pages/page404";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    }
`;

export default () => (
    <Router>
        <GlobalStyles />
        <Switch>
        			<Route exact path='/' component={Index}/>
			<Route exact path='/index' component={Index}/>
			<Route exact path='/signup' component={Signup}/>
			<Route exact path='/find-rides' component={FindRides}/>
			<Route exact path='/accept-rides' component={AcceptRides}/>
			<Route component={Page404}/>
        </Switch>
    </Router>
);
