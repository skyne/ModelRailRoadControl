import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Sandbox from '../pages/Sandbox';

export default class Layout extends React.Component {
    constructor() {
        super();
    }

    render(){
        return (
                <Router>
                        <Switch>
                            <Route exact path="/" component={Sandbox}/>
                        </Switch>
                </Router>
        );
    }
}
