import React, { Component } from 'react';
import Gameboard from './gameboard/components/Gameboard'
import ScoreKeeper from './ScoreKeeper'
import Inputform from './Inputform'
import QuestionDisplay from './QuestionDisplay'
import NewGame from './NewGame'
import category from './testing/category'
import './App.css'
import categoryIds from './data/categoryIds'
import { Route, Link } from 'react-router-dom'
import CluePopup from './CluePopup'
import AnswerDisplay from './AnswerDisplay'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      score:0,
      currentClue: {},
      userInput: '',
      inputDisabled: true,
      categoryIds: [],
      clueIsActive: false,
      showClue: false,
      showAnswer: false,
    }
  }

  render() {
    return (
      <>
       <h1 id="title">Jeopardy</h1>
        <CluePopup showClue={this.state.showClue} handleClose={this.resetClue} isDisabled={this.state.inputDisabled}>
          <QuestionDisplay question={this.state.currentClue.question}/>
          <Inputform setScore={this.setScore} isDisabled={this.state.inputDisabled}/>
          <AnswerDisplay answer={this.state.currentClue.answer} showAnswer={this.state.showAnswer}/>
        </CluePopup>
       <div className="score">
        <Route path='/(random|custom)/' component={() => <ScoreKeeper score={this.state.score}/>}/>
       </div>
       <div id="main">
          <div className="game-board">
              <Route path='/' exact component={() => <NewGame getCategoryIds={this.getCategoryIds}/>}/>
              <Route path='/' exact component={() => <Link to='/custom'><button>Custom Game</button> </Link>}/>
              <Route path='/random' exact component={() => <Gameboard setClue={this.setClue} idNums={this.state.categoryIds} clueIsActive = {this.state.clueIsActive}/>}/>
          </div>
       </div>
       <br/>
       <br/>
      </>
    );
  }

  // Reset states after the question is ansewered
  resetClue = () => {
    this.setState({
      currentClue: {},
      clueIsActive: false,
      showClue: false,
      showAnswer: false,
    })
  }

  getCategoryIds = () => {
    console.log('getCategoryIds called')
    // Initialize variables
    let randomIndex = 0;
    let ids = categoryIds                     // Ids from whole dataset
    let newArray = this.state.categoryIds     // Initialized to current state of ids

    // set 6 random Ids 
    for(let i = 0; i < 6; i++){
      //get random index
      randomIndex = Math.floor(Math.random() * ids.length)

      //add to new array
      newArray.push(ids[randomIndex])

      //remove from ids array
      ids.splice(randomIndex,1)
    }
    
    //set State
    this.setState({
      categoryIds: newArray
    })

    console.log('category ids after hitting new Game:' ,this.state.categoryIds)
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
      // Show answer if response was incorrect (or time expired)
      this.setState({showAnswer: true})
    }
    
    console.log('new score: ', newScore) 
    
    this.setState({
      score: newScore,
      inputDisabled: true,
    })
  }

  // Sets clue passed from Clue and enables Input
  setClue = (clue) => {
    console.log('setClue called',clue);

    console.log(this.state.clueIsActive);
      if(!this.state.clueIsActive){
        this.setState({
          currentClue: clue,
          inputDisabled: false,
          clueIsActive: true,
          showClue: true,
        });
      }
      
  }
}

export default App;