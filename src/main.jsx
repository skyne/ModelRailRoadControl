import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import 'bootstrap';

import { connect } from './actions/websocket.actions';
import appReducers from './reducers';
import { setStore as loaderSetStore } from './components/loader/Loader.react';
import { setStore as toasterSetStore } from './components/toaster/Toaster.react';
import { setStore as apiQueueSetStore } from './api/apiRequestQueue';
import { webSocketMiddleware } from './middlewares/webSocketMiddleware';
import App from './App';
import './style/app.scss';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(appReducers,composeEnhancers(
    applyMiddleware(webSocketMiddleware)
));
loaderSetStore(store);
toasterSetStore(store);
apiQueueSetStore(store);

store.dispatch({
    type: 'APP_INITIALIZING'
});
store.dispatch(connect('ws://localhost:12080/json/'));

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

setTimeout(()=> {

    store.dispatch({
        type: 'APP_INITIALIZED'
    });
}, 10000);
