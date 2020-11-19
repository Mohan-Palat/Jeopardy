import React, { Component } from 'react';

class Clue extends Component {
  constructor(props){
    super(props);

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