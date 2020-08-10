import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import getAppStore from './store/store';
import { getUsers } from './actions/users';
import './styles/styles.scss';

import { Provider } from 'react-redux';

const store = getAppStore();

const template = (
  // provider gives the store to whole application
    <Provider store={store}>
        <AppRouter />
    </Provider>
);


store.dispatch(getUsers()).then(() => {
    // console.log(store.getState());
    ReactDOM.render(template, document.getElementById('app'));
});
