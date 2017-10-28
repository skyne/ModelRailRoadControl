import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import 'bootstrap';

import appReducers from './reducers';
import { setStore as loaderSetStore } from './components/loader/Loader.react';
import { setStore as toasterSetStore } from './components/toaster/Toaster.react';
import { setStore as apiQueueSetStore } from './api/apiRequestQueue';
import App from './App';
import './style/app.scss';

const store = createStore(appReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
loaderSetStore(store);
toasterSetStore(store);
apiQueueSetStore(store);

store.dispatch({
    type: 'APP_INITIALIZING'
});

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
