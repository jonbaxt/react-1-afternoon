import React, { Component } from 'react';

export default class Palindrome extends Component {
constructor(){
  super()
  this.state = {
    userInput: '',
    palindrome: ''
  }
}
changeUserInput(newInput){
  this.setState({userInput: newInput})
}

updatePalindrome(statesUserInput){
  let userWord = statesUserInput
  let reversedWord;
  userWord.split('');
  reversedWord = userWord.split('');
  reversedWord = reversedWord.reverse();
  for(var i = 0; i<userWord.length; i++){
    if(userWord[i] !== reversedWord[i]){
      this.setState({palindrome: 'false'})
    }
    else{
      this.setState({palindrome: 'true'})
    }
  }
 
}

  render() {
    return (
      <div className='puzzleBox filterStringPB'>
        <h4>Palindrome</h4>
        <input className='inputLine' onChange={(newVal) => this.changeUserInput(newVal.target.value)} />
        <button className='confirmationButton' onClick={() => this.updatePalindrome(this.state.userInput)}>Check</button>
        <span className='resultsBox'>Palindrome: {this.state.palindrome} </span>
      </div>
    )
  }
}