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

  // On click, change the display from numeric value to the question
  // Send clue prop to App
  handleClick = (e)=>{
      console.log('clicked!', e.target)
      console.log('App clue is Active:', this.props.clueIsActive)
      if(this.state.hasBeenClicked===false&& this.props.clueIsActive === false){
        this.setState({
            hasBeenClicked:true,
            displayValue: this.props.clue.question
        });
        this.props.setClue(this.props.clue);
      }      
  }

  render() {
    return (
      <div className={this.state.hasBeenClicked ? 'clue-clicked':'clue'} onClick={this.handleClick}>
      <div className='clue-contents'> ${this.state.displayValue}</div>
      </div>
    );
  }
}

export default Clue;