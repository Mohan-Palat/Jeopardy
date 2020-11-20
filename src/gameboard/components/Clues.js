import React, { Component } from 'react';
import Clue from './Clue';

class Clues extends Component {
  
  render() {
    const clues = this.props.clues.map((clue,index)=>{
        return <Clue clue={clue}
                     setClue={this.props.setClue}
                     key={index}
                     clueIsActive = {this.props.clueIsActive}/>
    })
    return (
      <>
      <h3 className="clue-category">{this.props.title}</h3>
      {clues}
      </>
    );
  }
}

export default Clues;