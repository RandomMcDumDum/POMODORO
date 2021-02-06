import React, { Component, useEffect } from 'react';
import Countdown from './Countdown.js'
import Header from './Header.js'
import './App.css';

class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      currentTime: 2000,
      mode: 'FOCUS',
      countingDown: false
    }

    this.handleClick = this.handleClick.bind(this)
  }

 handleClick() {
    this.setState({countingDown: !this.state.countingDown});
  }

  timer(){
    this.setState({currentTime: this.state.currentTime - 1000})
    console.log('Another second has passed...')
    if(this.state.currentTime < 0 ){
      clearInterval(this.intervalID)
      this.setState({currentTime: 0});
    }
  }

  componentDidMount() {
      if(this.state.countingDown){
        this.intervalID = setInterval(this.timer.bind(this), 1000)
      }
  
  
  }

  componentWillUnmount(){
    clearInterval()
  }

  render(){
    return(
      <div>
        <Header mode={this.state.mode}/>
        <Countdown time={this.state.currentTime}/>
        <button onClick={this.handleClick}>{this.state.countingDown ? 'STOP' : 'START'}</button>
      </div>
    );
  }
}


export default App;
