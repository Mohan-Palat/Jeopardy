import React, { Component } from 'react';
import Clue from './Clue';

class Clues extends Component {
  
  scaleFontSize = (str)=>{
    const strLength = str.length;

    return strLength;

  }

  render() {
    const clues = this.props.clues.map((clue,index)=>{
        return <Clue clue={clue}
                     setClue={this.props.setClue}
                     key={index}
                     clueIsActive = {this.props.clueIsActive}/>
    })
    return (
      <div className='jeopardy-column'>
        <h3 className="clue-category">{this.props.title}</h3>
        {clues}
      </div>
    );
  }
}

export default Clues;