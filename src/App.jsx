import * as React from 'react';
import { connect } from 'react-redux';
import Mousetrap from 'mousetrap';

import Layout from './layout/Layout.react';

class App extends React.Component {

  constructor() {
    super();
    this.myRef = React.createRef();
  }

  componentDidMount(){
      this.mousetrap = new Mousetrap(this.myRef);
  }

  render () {
    return (
        <Layout ref={this.myRef} />
    );
  }
}

export default connect(state => ({ isAppInitializing: state.appState.isInitializing }),{ })(App);
