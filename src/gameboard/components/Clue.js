import React, { Component } from 'react';

class Clue extends Component {
  constructor(props){
    super(props);

    // Keep track of whether clue has been clicked. Should not be able to click same clue twice
    // Clue should diplay value first, once it has been clicked, it should display the question
    this.state ={
        hasBeenClicked: false,
        displayValue: this.props.clue.value
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(this.props.hasBeenClicked);
    if (!this.state.hasBeenClicked) {
      return true;
    } else {
      return false;
    }
  }

  // On click, change the display from numeric value to the question
  // Send clue prop to App
  handleClick = (e) =>{
      e.preventDefault();
      //e.stopPropagation();
      console.log('clicked!')
      console.log('App clue is Active:', this.props.clueIsActive)
      
      if(this.state.hasBeenClicked===false&& this.props.clueIsActive === false){
        
        this.setState({
            hasBeenClicked:true,
            displayValue: this.props.clue.question
        });
        this.props.setClue(e, this.props.clue);
      }      
  }

  render() {
    return (
      <div className={this.state.hasBeenClicked ? 'clue-clicked':'clue'} onClick={(e) => this.handleClick(e)}>
      <div className='clue-contents'> ${this.state.displayValue}</div>
      </div>
    );
  }
}

export default Clue;