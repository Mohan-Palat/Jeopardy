import React, { Component } from 'react';
import Gameboard from './gameboard/components/Gameboard'
import ScoreKeeper from './ScoreKeeper'
import Inputform from './Inputform'
import QuestionDisplay from './QuestionDisplay'
import NewGame from './NewGame'
import category from './testing/category'
import './App.css'
import categoryIds from './data/categoryIds'
import { Route, Link, useHistory } from 'react-router-dom'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      score:0,
      currentClue: {},
      userInput: '',
      inputDisabled: true,
      categoryIds: [],
      clueIsActive: false
    }
  }

  render() {
    // let gameBoard = <NewGame getCategoryIds={this.getCategoryIds}/>
    // if(this.state.categoryIds.length === 6){
    //   gameBoard = <Gameboard setClue={this.setClue} idNums={this.state.categoryIds} clueIsActive = {this.state.clueIsActive}/>
    // }
    return (
      <>
       <h1 id="title">Jeopardy</h1>
       <div id="main">
          <div className="game-board">
              {/* {gameBoard} */}
              <Route path='/' exact component={() => <Link to='/random'><NewGame getCategoryIds={this.getCategoryIds}/></Link>}/>

              {/* <Route path='/' exact component={() => <NewGame getCategoryIds={this.getCategoryIds}/>}/> */}
              <Route path='/' exact component={() => <Link to='/custom'><button>Custom Game</button> </Link>}/>
              <Route path='/random' exact component={() => <Gameboard setClue={this.setClue} idNums={this.state.categoryIds} clueIsActive = {this.state.clueIsActive}/>}/>
          </div>
          <div className="side-panel">
              {/* Used Regex to assign one component to multiple routes */}
              <Route path='/(random|custom)/' component={() => <QuestionDisplay question={this.state.currentClue.question}/>}/>
              <Route path='/(random|custom)/' component={() => <Inputform setScore={this.setScore} isDisabled={this.state.inputDisabled}/>}/>
          </div>
       </div>
       <br/>
       <div className="score">
         {/* Used Regex to assign one component to multiple routes */}
          <Route path='/(random|custom)/' component={() => <ScoreKeeper score={this.state.score}/>}/>
       </div>

      </>
    );
  }

  // useHistoryForPath = (path) => {
  //   let history = useHistory()
  //   history.push(path)
  // }

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

    // route to /random path using React Hooks
    // this.useHistoryForPath('/random')
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
      score: newScore,
      inputDisabled: true,
      currentClue: {},
      clueIsActive: false,
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
        });
      }
      
  }
}

export default App;