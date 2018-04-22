import React, { Component } from 'react';

/*
Add the following className props to the outline:
div - className="puzzleBox evenAndOddPB"
input - className="inputLine"
button - className="confirmationButton"
Both spans - className="resultsBox"
Assign the h4 element the value of "Evens and Odds".
Create a constructor method that creates an initial state:
evenArray - This should default to an empty array.
oddArray - This should default to an empty array.
userInput - This should default to an empty string.
Create an onChange prop for the input element that updates the value of userInput on state.
Create an onClick prop for the button element that calls a method on the class:
This method should solve the toy problem.
This method should update the value of evenArray and oddArray on state.
Assign one span element to display the value of evenArray.
Assign the other span element to display the value of oddArray.
*/
export default class EvenAndOdd extends Component {
  constructor(){
    super()
      this.state = {
        evenArray: [],
        oddArray: [],
        userInput: ''
      }
  }
  changes(inputUsr){
    this.setState({userInput: inputUsr});
  }

  decipherEvensAndOdds(fromUser){
    var mainArr = fromUser.split(',');
    var evenNums = []
    var oddNums = []

    for(var i = 0; i < mainArr.length; i++){
      if ( mainArr[i] % 2 === 0 ){
        evenNums.push(parseInt(mainArr[i], 10));
      } else{
        oddNums.push(parseInt(mainArr[i], 10));
      }
    }
    this.setState({
      evenArray: evenNums,
      oddArray: oddNums
    })
  }

  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4> Evens and Odds </h4>
        <input className="inputLine" onChange={ (theChange) => this.changes(theChange.target.value)} />
        <button className="confirmationButton" onClick={ () => this.decipherEvensAndOdds(this.state.userInput)}>Split</button>
        <span className="resultsBox"> Evens: {JSON.stringify(this.state.evenArray, 10)} </span>
        <span className="resultsBox"> Odds: {JSON.stringify(this.state.oddArray, 10)}</span>
      </div>
    )//{String(this.state.evenArray)}   {String(this.state.oddArray)}
  }
}