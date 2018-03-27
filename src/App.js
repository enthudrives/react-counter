import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter'
import {connect} from 'unistore/react'
import actions from "./actions";

let AppComponent = ({count}) => {
    return <div>
        <div className="Counter" style={{"backgroundColor": 'red', width: '60%'}}>
            <h2>Number of votes: {count}</h2>
        </div>
        <img src={logo} style={{width: '60%'}}/>
        <p> This is my logo. Please upvote!</p>
        <Counter/>
    </div>;
};

const App = connect('count', actions)(AppComponent);

export default App;
