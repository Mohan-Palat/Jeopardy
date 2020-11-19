import React, { Component } from 'react';

class Clue extends Component {
  constructor(props){
    super(props);

    // keep track of whether clue has been clicked, Question should remain hidden until it has been clicked
    this.state ={
        hasBeenClicked: false,
    }
  }

  render() {
    return (
      <>
      <h4>{this.props.question}</h4>
      </>
    );
  }
}

export default Clue;