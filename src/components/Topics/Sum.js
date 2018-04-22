import React, { Component } from 'react';

export default class Sum extends Component {
  constructor(){
    super()
    this.state = {
      number1: 0,
      number2: 0,
      sum: null
    }
  }
  stateFirstBox(newNum){
    this.setState({number1: newNum})
  }
  stateSecondBox(newNum){
    this.setState({number2: newNum})
  }

  getSum(){
    let num1 = Number(this.state.number1);
    let num2 = Number(this.state.number2);
    let combined = num1 + num2;
    this.setState({sum: combined})
  }

  render() {
    return (
      <div className='puzzleBox sumPB'>
        <h4>Sum</h4>
        <input className="inputLine" onChange={(number) => this.stateFirstBox(number.target.value)} />
        <input className="inputLine" onChange={(number) => this.stateSecondBox(number.target.value)} />
        <button className="confirmationButton" onClick={() => this.getSum()} >Add</button>
        <span className="resultsBox">Sum: {this.state.sum}</span>
        </div>
    )
  }
}