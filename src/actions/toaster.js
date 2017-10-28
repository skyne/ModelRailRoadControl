import ACTIONS from '../actionTypes/toaster';

export function addMessage(name, type, message) {
    return {
        type: ACTIONS.ADD_MESSAGE,
        componentName: name || 'global',
        messageType: type,
        message
    };
}

export function hideMessage(name, key) {
    return {
        type: ACTIONS.HIDE_MESSAGE,
        componentName: name || 'global',
        messageKey: key
    };
}

export function initializeComponentToaster(name) {
    return {
        type: ACTIONS.INITIALIZE_COMPONENT_TOASTER,
        componentName: name || 'global'
    };
}

export function deinitComponentToaster(name) {
    return {
        type: ACTIONS.DEINITIALIZE_COMPONENT_TOASTER,
        componentName: name || 'global'
    };
}
