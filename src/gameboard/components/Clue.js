import React, { Component } from 'react';

class Clue extends Component {
  constructor(props){
    super(props);

    // keep track of whether clue has been clicked
    // Clue should diplay value first, once it has been clicked, it should display the question
    this.state ={
        hasBeenClicked: false,
    }
  }

  render() {
    return (
      <div class='clue'>
      <h4>{this.props.clue.value}</h4>
      </div>
    );
  }
}

export default Clue;