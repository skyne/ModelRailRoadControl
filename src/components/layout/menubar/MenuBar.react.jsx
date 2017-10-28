import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import MenuBarView from './MenuBar.vue';

export default class MenuBar extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <MenuBarView>
                <li><Link to="/">Sandbox</Link></li>
                <li><Link to="/test">Test</Link></li>
            </MenuBarView>
        );
    }
}
