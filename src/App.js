import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter'
import {connect} from 'redux';

class App extends Component {

constructor(props) {
    super(props);
    this.state= {count: 1};
}

onClick() {
    let c = this.state.count;
    this.setState({count: c + 1});
}

render() {
      return (
        <div>
          <div className="Counter" style={{"backgroundColor": 'red', width: '60%'}}>
              <h2>Number of votes: {this.state.count}</h2>
          </div>
                <img src={logo} style={{width: '60%'}} />
                <p> This is the picture of my dog. Please like and share!</p>
                <Counter value={this.state.count} onClick={this.onClick.bind(this)}/>
         </div>
        );
}
}

export default App;
