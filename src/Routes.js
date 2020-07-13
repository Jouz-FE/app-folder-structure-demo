import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {HomePage, LoginPage} from './pages'


const Routes =()=> {
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/login" component={LoginPage} />
            </Switch>
        </Router>
    )
}
export default Routes


