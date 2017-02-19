import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter'
import CounterContainer from './CounterContainer'
import {connect} from 'react-redux';

let App = ({count}) => {
      return (
        <div>
          <div className="Counter" style={{"backgroundColor": 'red', width: '60%'}}>
              <h2>Number of votes: {count} </h2>
          </div>
                <img src={logo} style={{width: '60%'}} />
                <p> This is the picture of my dog. Please like and share!</p>
                <CounterContainer />
         </div>
        );
}

const mapStateToProps = (state) => {
    return {count: state.count}
}

App = connect(mapStateToProps)(App);
export default App;
