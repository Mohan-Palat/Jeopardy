import React, { Component } from 'react';
import Clue from './Clue';

class Clues extends Component {
  
  render() {
    const clues = this.props.clues.map((clue,index)=>{
        return <Clue clue={clue}
                     setClue={this.props.setClue}
                     key={index}/>
    })
    return (
      <>
      <h3 className="clue">Clues</h3>
      {clues}
      </>
    );
  }
}

export default Clues;