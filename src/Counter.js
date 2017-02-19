import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

const Counter = ({dispatch}) => {
    return (
            <button onClick={() => dispatch({type: 'clicked'})}> Vote! </button>
        );
}

export default Counter;
