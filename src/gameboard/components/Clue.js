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

      if(this.props.clue.hasBeenClicked===false && this.props.clueIsActive === false){
        this.setState({displayValue: this.props.clue.question}, () => {
          this.props.setClue(e, this.props.clue, true);
        });
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
