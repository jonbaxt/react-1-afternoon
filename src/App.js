import React, { Component } from 'react';
import './index.css';
import TopicBrowser from './components/TopicBrowser/TopicBrowser';
//import EvenAndOdd from './Topics/EvenAndOdd'


class App extends Component {

  render() {
    return (
      <div>
        <TopicBrowser />
      </div>
    );
  }
}

export default App;
