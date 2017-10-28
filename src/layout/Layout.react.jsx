import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MenuBar from '../components/layout/menubar';
import Sandbox from '../pages/Sandbox';

export default class Layout extends React.Component {
    constructor() {
        super();
    }

    render(){
        return (
                <Router>
                    <div>
                        <MenuBar />
                        <Switch>
                            <Route exact path="/" component={Sandbox}/>
                            <Route path="/test" render={() => (
                                <h3>Please select a topic.</h3>
                            )}/>
                        </Switch>
                    </div>
                </Router>
        );
    }
}
