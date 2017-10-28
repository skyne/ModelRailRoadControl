import ACTIONS from '../actionTypes/loader.actionTypes';

export function showLoader(name) {
    return {
        type: ACTIONS.SHOW_LOADER,
        componentName: name || 'global'
    };
}

export function hideLoader(name) {
    return {
        type: ACTIONS.HIDE_LOADER,
        componentName: name || 'global'
    };
}

export function initializeComponentLoader(name) {
    return {
        type: ACTIONS.INITIALIZE_COMPONENT_LOADER,
        componentName: name || 'global'
    };
}

export function deinitComponentLoader(name) {
    return {
        type: ACTIONS.DEINITIALIZE_COMPONENT_LOADER,
        componentName: name || 'global'
    };
}
