import * as React from 'react';
import { connect } from 'react-redux';

import { showLoader } from '../../actions/loader.actions';

import * as SandboxView from './Sandbox.vue';
import withLoader from '../../components/loader';
import withToaster from '../../components/toaster';

class Sandbox extends React.Component {

  constructor() {
    super();
    this.state = {
      counter: 0
    };
  }

  componentWillMount(){
    this.view = withToaster(withLoader(SandboxView), 'SandboxView');
  }

  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  }

  render () {
    const View = this.view;

    return (<View msg={'Hello'+this.state.counter} isAppInitializing={this.props.isAppInitializing} onClick={this.increment} showLoader={this.props.showLoader} addMessage={this.props.addMessage} />);
  }
}

export default connect(state => ({ isAppInitializing: state.appState.isInitializing }),{ showLoader })(Sandbox);
