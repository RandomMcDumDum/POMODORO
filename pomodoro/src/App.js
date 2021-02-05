import React, { Component } from 'react';
import Countdown from './Countdown.js'
import Header from './Header.js'
import './App.css';

class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      totalTime: 2400000,
      mode: 'FOCUS',
      countingDown: true
    }
  }

  componentDidMount() {
  }

  componentWillUnmount(){
  }

  render(){
    return(
      <div>
        <Header mode={this.state.mode}/>
        <Countdown time={this.state.totalTime}/>
      </div>
    );
  }
}

export default App;
