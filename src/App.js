import React, { Component } from 'react';

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
      </>
    );
  }
}

export default App;