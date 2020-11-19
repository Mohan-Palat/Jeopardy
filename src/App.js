import React, { Component } from 'react';
import Gameboard from './gameboard/components/Gameboard'
import ScoreKeeper from './ScoreKeeper'
import Inputform from './Inputform'
import QuestionDisplay from './QuestionDisplay'
import category from './testing/category'
import './App.css'

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
       <h1 id="title">Jeopardy</h1>
       <div id="main">
          <div className="game-board">
              <Gameboard setClue={this.setClue}/>
          </div>
          <div className="side-panel">
              <QuestionDisplay question={this.state.currentClue.question}/>
              <Inputform setScore={this.setScore}/>
          </div>
       </div>
       <br/>
       <div className="score">
          <ScoreKeeper score={this.state.score}/>
       </div>
      </>
    );
  }

  setScore = (userInput) => {
    // will check if user input = currentClue.answer
    // if so, increment score
    // it not, decrement score
    //set Score will be called from within in this method
    let newScore = 0;
    if(userInput.toLowerCase() === this.state.currentClue.answer.toLocaleLowerCase()){
      newScore = this.state.score + this.state.currentClue.value
    } else {
      newScore = this.state.score - this.state.currentClue.value
    }
    
    console.log('new score: ', newScore) 
    
    this.setState({
      score: newScore
    })
  }

  setClue = (clue) => {
    console.log('setClue called',clue);
    this.setState({
      currentClue: clue
    })
  }
}

export default App;