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
       <Gameboard setClue={this.setClue}/>
       <QuestionDisplay question={this.state.currentClue.question}/>
       <Inputform setScore={this.setScore}/>
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