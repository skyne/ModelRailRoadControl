const initialState = {
    isInitializing: false
};

export default function appStateReducer(state = initialState, action) {
    switch (action.type) {
        case 'APP_INITIALIZING':
            return Object.assign({}, state, {
                isInitializing: true
            });
        case 'APP_INITIALIZED':
            return Object.assign({}, state, {
                isInitializing: false
            });
        default:
            return state;
    }
}
