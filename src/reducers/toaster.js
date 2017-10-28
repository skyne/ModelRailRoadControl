import ACTIONS from '../actionTypes/toaster';

const initalBaseState = {
    messages: [],
    index: 0
};

const initialState = {
    global: Object.assign({}, initalBaseState)
};

export default function toasterReducer(state = initialState, action) {
    const componentToasterState = {};
    switch (action.type) {
        case ACTIONS.ADD_MESSAGE:
            componentToasterState[action.componentName] = {
                index: state[action.componentName].index + 1
            };
            componentToasterState[action.componentName].messages = [
                ...state[action.componentName].messages,
                { key: componentToasterState[action.componentName].index, type: action.messageType, message: action.message }
            ];

            return Object.assign({}, state, componentToasterState);
        case ACTIONS.HIDE_MESSAGE:
            componentToasterState[action.componentName] = {
                index: state[action.componentName].index
            };
            componentToasterState[action.componentName].messages = state[action.componentName].messages.filter((message) => {
                return message.key !== action.messageKey;
            });

            return Object.assign({}, state, componentToasterState);
        case ACTIONS.INITIALIZE_COMPONENT_TOASTER:
            componentToasterState[action.componentName] = initalBaseState;

            return Object.assign({}, state, componentToasterState);
        case ACTIONS.DEINITIALIZE_COMPONENT_TOASTER:
            delete state[action.componentName];

            return Object.assign({}, state, componentToasterState);
        default:
            return state;
    }
}
