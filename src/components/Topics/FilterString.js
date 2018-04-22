import React, { Component } from 'react';

export default class FilterString extends Component {
  constructor() {
    super()
    this.state = {
      unFilteredArray: ['James', 'Jessica', 'Gordon', 'Brad', 'Tyler', 'Thomas', 'Tim', 'Alan'],
      userInput: '',
      filteredArray: []
    }
  }
  updateUserInput(update) {
    this.setState({
      userInput: update
    })
  }
  filterTheArray(usersInstruction) {
    let namesArray = this.state.unFilteredArray;
    let tempArray = []
    for ( var i = 0; i < namesArray.length; i++ ) {
      if ( namesArray[i].includes(usersInstruction) ) {
        tempArray.push(namesArray[i]);
      }
    }
    this.setState({filteredArray: tempArray})
  }
  //onChange prop for the
  render() {
    return (
      <div className='puzzleBox filterStringPB' >
        <h4>Filter String</h4>
        <span className='puzzleText'>{JSON.stringify(this.state.unFilteredArray, null, 10)} </span>
        <input className='inputLine' onChange={(newEl) => this.updateUserInput(newEl.target.value)} />
        <button className='confirmationButton' onClick={() => this.filterTheArray(this.state.userInput)}>Filter</button>
        <span className='resultsBox filterStringRB'>{JSON.stringify(this.state.filteredArray,null,10)} </span>
      </div>
    )
  }
}