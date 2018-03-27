import React from 'react';
import './App.css';
import actions from "./actions";
import {connect} from "unistore/react";

const CounterComponent = ({increment}) => {
    return (
        <button onClick={increment}> Vote! </button>
    );
};

const Counter = connect([], actions)(CounterComponent);

export default Counter;
