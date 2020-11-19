import React, { Component } from 'react';
import Clue from './Clue';

class Clues extends Component {
  
  render() {
    const clues = this.props.clues.map((clue)=>{
        return <Clue value={clue.value} question={clue.question} answer = {clue.answer}/>
    })
    return (
      <>
      <h3>Clues</h3>
      {clues}
      </>
    );
  }
}

export default Clues;