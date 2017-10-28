import ACTIONS from '../actionTypes/loader.actionTypes';

const initalBaseState = {
    isVisible: false
};

const initialState = {
    global: Object.assign({}, initalBaseState)
};

export default function loaderReducer(state = initialState, action) {
    const componentLoaderState = {};
    switch (action.type) {
        case ACTIONS.SHOW_LOADER:
            componentLoaderState[action.componentName] = {
                isVisible: true
            };

            return Object.assign({}, state, componentLoaderState);
        case ACTIONS.HIDE_LOADER:
            componentLoaderState[action.componentName] = {
                isVisible: false
            };

            return Object.assign({}, state, componentLoaderState);
        case ACTIONS.INITIALIZE_COMPONENT_LOADER:
            componentLoaderState[action.componentName] = initalBaseState;

            return Object.assign({}, state, componentLoaderState);
        case ACTIONS.DEINITIALIZE_COMPONENT_LOADER:
            delete state[action.componentName];

            return Object.assign({}, state, componentLoaderState);
        default:
            return state;
    }
}
