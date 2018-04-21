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
  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4> Evens and Odds </h4>
        <input className="inputLine" />
        <button className="confirmationButton" >Split</button>
        <span className="resultsBox"> </span>
        <span className="resultsBox"> </span>
      </div>
    )
  }
}