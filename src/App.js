import React, { Component } from 'react';
import Gameboard from './gameboard/components/Gameboard'
import ScoreKeeper from './ScoreKeeper'
import Inputform from './Inputform'
import QuestionDisplay from './QuestionDisplay'
import category from './testing/category'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      score:0,
      currentClue: category.clues[0],
      userInput: '',
    }
  }

  render() {
    return (
      <>
       <h1>Jeopardy</h1>
       <ScoreKeeper score={this.state.score}/>
       <Gameboard/>
       <QuestionDisplay question={this.state.currentClue.question}/>
       <Inputform/>
      </>
    );
  }
}

export default App;