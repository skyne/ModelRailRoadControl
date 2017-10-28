import * as React from 'react';
import { connect } from 'react-redux';

import { showLoader, hideLoader, initializeComponentLoader, deinitComponentLoader } from '../../actions/loader.actions';

import LoaderView from './Loader.vue';

let Store = {};
export function setStore(store) {
    Store = store;
}

class Loader extends React.PureComponent {
    constructor(props){
        super(props);
    }
    render() {
        return (
            this.props.isLoaderVisible ?
                <LoaderView />
            :
            null
        );
    }
}

export default function withLoader(WrappedComponent, key) {
    return class WithLoader extends React.Component {
        constructor(props) {
            super(props);

            this.wrappedComponentName = key || WrappedComponent.name;

            Store.dispatch(initializeComponentLoader(this.wrappedComponentName));

            this.connectedLoader = connect((state) => ({ isLoaderVisible: state.loader[this.wrappedComponentName].isVisible }))(Loader);
            this.mappedWrappedComponent = connect(null, {
                showLoader: () => showLoader(this.wrappedComponentName),
                hideLoader: () => hideLoader(this.wrappedComponentName)
            })(WrappedComponent);
        }
        render() {
            const ConnectedLoader = this.connectedLoader;
            const MappedWrappedComponent = this.mappedWrappedComponent;
            return (
                <div className="loader-container">
                    <ConnectedLoader />
                    <MappedWrappedComponent {...this.props} />
                </div>
            );
        }

        componentWillUnmount() {
            Store.dispatch(deinitComponentLoader(this.wrappedComponentName));
        }
    };
}
