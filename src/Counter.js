import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

const Counter = ({onClick}) => {
    return (
            <button onClick={onClick}> Vote! </button>
        );
}

export default Counter;
