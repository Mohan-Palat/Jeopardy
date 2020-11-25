import React, { Component } from 'react';
import Gameboard from './gameboard/components/Gameboard';
import ScoreKeeper from './ScoreKeeper';
import Inputform from './Inputform';
import QuestionDisplay from './QuestionDisplay';
import NewGame from './NewGame';
import './App.css';
import categoryIds from './data/categoryIds';
import { Route, Link } from 'react-router-dom';
import CluePopup from './CluePopup';
import AnswerDisplay from './AnswerDisplay';
import Search from './customGame/Search';
import axios from 'axios'

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
      answeredCorrectly: false,
      categories: [],
    }
  }


  render() {

    return (
      <>
       <h1 id="title">This is... Jeopardy!</h1>
       <CluePopup showClue={this.state.showClue} handleClose={this.resetClue} isDisabled={this.state.inputDisabled}>
          <QuestionDisplay question={this.state.currentClue.question}/>
          <Inputform setScore={this.setScore} isDisabled={this.state.inputDisabled}/>
          <AnswerDisplay answer={this.state.currentClue.answer} showAnswer={this.state.showAnswer} answeredCorrectly={this.state.answeredCorrectly}/>
        </CluePopup>
       <div className="score">
        <Route path='/(random|custom)/' component={() => <ScoreKeeper score={this.state.score}/>}/>
       </div>
       <div id="main">
          <div className="game-board">
            <div className='landing-buttons'>
              <Route path='/' exact component={() => <NewGame getCategoryIds={this.getCategoryIds}/>}/>
              <Route path='/' exact component={() => <Link to='/custom-settings'><button>Custom Game</button> </Link>}/>
            </div>

              <Route path='/random' exact component={() => <Gameboard setClue={this.setClue} 
                                                                      idNums={this.state.categoryIds} 
                                                                      clueIsActive = {this.state.clueIsActive} 
                                                                      categories={this.state.categories}/>}/>

              <Route path='/custom-settings' exact component={() => <Search addSearch ={this.addIDFromSearch} 
                                                                            selectedIDs = {this.state.categoryIds}/>}/>

              <Route path='/custom-settings' exact component={() => <Link to='/custom'><button>Start Game</button> </Link>}/>
              <Route path='/custom' exact component={() => <Gameboard setClue={this.setClue} 
                                                            idNums={this.state.categoryIds} 
                                                            clueIsActive = {this.state.clueIsActive}
                                                            categories={this.state.categories}/>}/>
          </div>
       </div>
       <br/>
       <br/>
      </>
    );
  }

  // Calls jservice API to get a single category by ID
  getCategoryFromID = (id) =>{
    const jserviceURL = 'https://jservice.io/api/category?id='+id;
        return axios.get(jserviceURL)
  }

  /**
   * Given an array of numbers, pull data from jservice API by id for each number
   * @param {*} numbers Array of ID numbers
   */
  getCategoriesFromIDs = (numbers) =>{
    console.log('get categories from ids: ', numbers)
    numbers.forEach((id)=>{
        this.getCategoryFromID(id)
        .then((response)=>{

            //Push API output into categories array
            this.setState(prevState=>({categories:[...prevState.categories,response.data]}), () => {
              if(this.state.categories.length === 6){
                this.setHasBeenClicked()
              }
            });
        })
        .catch((error)=>{
            console.log(error);
        })
    });
  }

  // Take ID passed from search component and add a category
  addIDFromSearch = (id) =>{
    
    // Only do this if less than 6 categories
    if(this.state.categories.length<6){
      
      this.getCategoryFromID(id)
        .then((response)=>{
          //Push API output into categories array
          this.setState(prevState=>({categories:[...prevState.categories,response.data],
                                     categoryIds:[...prevState.categoryIds,id]
                                    }), () => {
                                                if(this.state.categories.length === 6){
                                                  this.setHasBeenClicked()
                                                }
          });
        })
        .catch((error)=>{
          console.log(error);
        });
    }
    console.log(this.state.categoryIds);
  }

  // Reset states after the question is answered
  resetClue = (e) => {
    e.preventDefault()
    this.setState({
      currentClue: {},
      clueIsActive: false,
      showClue: false,
      showAnswer: false,
      answeredCorrectly: false,
    })
  }

  getCategoryIds = () => {
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

      //remove from ids array, so that we don't randomly pick the same category again
      ids.splice(randomIndex,1)
    }
    
    //set State
    this.setState({
      categoryIds: newArray
    })

    // call API with stored ids to get category details
    this.getCategoriesFromIDs(this.state.categoryIds);
  }

  setScore = (userInput) => {
    // initialize new score to a default value
    let newScore = 0;

    // check if user input = currentClue.answer
    if(userInput.toLowerCase() === this.state.currentClue.answer.toLocaleLowerCase()){
      // if so, increment score
      newScore = this.state.score + this.state.currentClue.value
      
      // Set flag when user reponded accurately
      this.setState({answeredCorrectly: true})
    } else {
      // it not, decrement score
      newScore = this.state.score - this.state.currentClue.value
      
      // Set flag when response was wrong (or time expired)
      this.setState({answeredCorrectly: false})
    }
   
    //set Score will be called from within in this method
    this.setState({
      score: newScore,
      inputDisabled: true,
      showAnswer: true,
    })
  }

  // Sets clue passed from Clue and enables Input
  setClue = (e, clue, hasBeenClicked) => {
    e.preventDefault()

    // update categories array
    let categories = this.state.categories        // make a copy of this.state.categories and modify the copy

    // find clue and update value of hasBeenClicked
    categories.forEach((category) => {
      category.clues.forEach((cat_clue) => {
        if(cat_clue === clue){
          cat_clue.hasBeenClicked = true
        }
      })
    })

    if(!this.state.clueIsActive){
      this.setState({
        currentClue: clue,
        inputDisabled: false,
        clueIsActive: true,
        showClue: true,
        categories: categories,
      });
    }
      
  }

  setHasBeenClicked = () => {
    // make a copy of categories
    let categories = this.state.categories

    // set each clue to have property hasBeenClicked = false
    categories.forEach((category) => {
      category.clues.forEach((clue) => {
        clue.hasBeenClicked = false
      })
    })

    //set categories state
    this.setState({categories: categories})
  }
}

export default App;