import React, { Component } from 'react';

class Clue extends Component {
  constructor(props){
    super(props);

    // Clue should diplay value first, once it has been clicked, it should display the question
    this.state ={
        displayValue: this.props.clue.value,
    }
  }


  // On click, change the display from numeric value to the question
  // Send clue prop to App
  handleClick = (e) =>{
      e.preventDefault();
      // e.stopPropagation();
      // console.log('clicked!')
      // console.log('App clue is Active:', this.props.clueIsActive)
      console.log('BEFORE SET STATE >>> ', this.props.clue.hasBeenClicked)
      if(this.props.clue.hasBeenClicked===false && this.props.clueIsActive === false){
        console.log('INSIDE HANDLE CLICK ON CLUE')
        this.setState({displayValue: this.props.clue.question}, () => {
          this.props.setClue(e, this.props.clue, true);
        });
        console.log('AFTER SET STATE >>> ', this.state.hasBeenClicked)
      }      
  }

  render() {
    return (
      <div className='clue' onClick={(e) => this.handleClick(e)}>
      <div className={this.props.clue.hasBeenClicked ? 'clue-clicked clue-contents':'clue-contents'}> ${this.state.displayValue}</div>
      </div>
    );
  }
}

export default Clue;
