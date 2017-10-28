import * as React from 'react';
import { connect } from 'react-redux';

import { addMessage, hideMessage, initializeComponentToaster, deinitComponentToaster } from '../../actions/toaster';
import TOAST_TYPES from './toastTypes';

import ToasterView from './Toaster.vue';
import ToastView from './Toast.vue';

let Store = {};
export function setStore(store) {
    Store = store;
}

class Toaster extends React.PureComponent {
    constructor(props){
        super(props);
    }
    render() {
        return (
            this.props.messages && this.props.messages.length > 0 ?
                <ToasterView>
                    {this.props.messages.map((message => {
                            return (<ToastView key={message.key} message={message.message} type={TOAST_TYPES[message.type].class} onClose={() => this.props.hideMessage(message.key)} />);
                        }))
                    }
                </ToasterView>
            :
            null
        );
    }
}

export default function withToaster(WrappedComponent, key) {
    return class WithToaster extends React.Component {
        constructor(props) {
            super(props);

            this.wrappedComponentName = key || WrappedComponent.name;

            Store.dispatch(initializeComponentToaster(this.wrappedComponentName));

            this.connectedToaster = connect((state) => ({ messages: state.toaster[this.wrappedComponentName].messages }), { hideMessage: (key) => hideMessage(this.wrappedComponentName,key ) })(Toaster);
            this.mappedWrappedComponent = connect(null, {
                addMessage: (type, message) => addMessage(this.wrappedComponentName, type, message)
            })(WrappedComponent);
        }
        render() {
            const ConnectedToaster = this.connectedToaster;
            const MappedWrappedComponent = this.mappedWrappedComponent;
            return (
                <div className="message-container">
                    <ConnectedToaster />
                    <MappedWrappedComponent {...this.props} />
                </div>
            );
        }

        componentWillUnmount() {
            Store.dispatch(deinitComponentToaster(this.wrappedComponentName));
        }
    };
}
