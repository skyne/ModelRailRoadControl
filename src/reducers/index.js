import { combineReducers } from 'redux';
import loaderReducer from './loader.reducers';
import appStateReducer from './appState.reducers';
import toasterReducer from './toaster';

const appReducers = combineReducers({
    loader: loaderReducer,
    appState: appStateReducer,
    toaster: toasterReducer
});

export default appReducers;
