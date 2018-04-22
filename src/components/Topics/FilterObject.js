import React, { Component } from 'react';

export default class FilterObject extends Component {
  constructor() {
    super()
    this.state = {
      unFilteredArry: [
        { name: 'Burt', title: 'CEO', age: 40 },
        { name: 'Grandma WickerBasket Pennywinkle', age: 700, hairColor: 'moulting' },
        { name: 'Carly Rae Jeppson', title: 'Stupid Person Who Invented the Call me maybe song and can kiss my bottom' }
      ],
      userInput: '',
      filteredArray: []
    }
  }
  changeUserInput(theChange) {
    this.setState({ userInput: theChange })
  }
  filterTheArray(propEl) {
    var oldArray = this.state.unFilteredArry;
    let newArray = []
    for (var i = 0; i < oldArray.length; i++) {
      if (oldArray[i].hasOwnProperty(propEl)) { 
        newArray.push(oldArray[i])
      }
    }
    this.setState({
      filteredArray: newArray
    })
  }
  

render() {

  return (
    <div className='puzzleBox filterObjectPB'>
      <h4>Filter Object</h4>
      <span className='puzzleText'>{JSON.stringify(this.state.unFilteredArry, null, 10)}</span>
      <input className='inputLine' onChange={(userChange) => this.changeUserInput(userChange.target.value)} />
      <button className='confirmationButton' onClick={() => this.filterTheArray(this.state.userInput)}>Filter</button>
      <span className='resultsBox filterObjectRB'>{JSON.stringify(this.state.filteredArray, null, 10)}</span>
    </div>
  )
}
}
