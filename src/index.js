import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const reducer = (state={count: 1}, action) => {
    if(action.type == "clicked") {
     state = {...state, count: state.count + 1}
    }
    return state;
}

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App value="1"/>
    </Provider>,
  document.getElementById('root')
);
