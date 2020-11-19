import React, { Component } from 'react';

class Clue extends Component {
  constructor(props){
    super(props);

    // Keep track of whether clue has been clicked
    // Clue should diplay value first, once it has been clicked, it should display the question
    this.state ={
        hasBeenClicked: false,
        displayValue: this.props.clue.value
    }
  }

  // On click, change the display from numeric value to the question
  // Send clue prop to App
  handleClick = (e)=>{
      console.log('clicked!')
      this.setState({
          hasBeenClicked:true,
          displayValue: this.props.clue.question
      });
      this.props.setClue(this.props.clue);
  }

  render() {
    return (
      <div className='clue' onClick={this.handleClick}>
      <h4>{this.state.displayValue}</h4>
      </div>
    );
  }
}

export default Clue;