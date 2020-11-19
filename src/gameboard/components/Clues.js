import React, { Component } from 'react';
import Clue from './Clue';

class Clues extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <>
      <h3>Clues</h3>
      <Clue/>
      </>
    );
  }
}

export default Clues;