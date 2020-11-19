import React, { Component } from 'react';
import Gameboard from './gameboard/components/Gameboard'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      score:0,
      currentClue: {},
      userInput: '',
    }
  }

  

  render() {
    return (
      <>
       <h1>Jeopardy</h1>
       <Gameboard/>
      </>
    );
  }
}

export default App;