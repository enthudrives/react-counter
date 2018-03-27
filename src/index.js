import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import createStore from 'unistore'
import { Provider } from 'unistore/react'

let store = createStore({ count: 0 });


ReactDOM.render(
    <Provider store={store}>
        <App value="1"/>
    </Provider>,
  document.getElementById('root')
);
