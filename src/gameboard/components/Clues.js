import React, { Component } from 'react';
import Clue from './Clue';

class Clues extends Component {
  
  // given a string, return fontSize with inversley proportional font size to str length
  scaleFontSize = (str)=>{
    const strLength = str.length;

    return 1;

  }

  render() {
    const cellStyle = this.scaleFontSize('zzz');

    const clues = this.props.clues.map((clue,index)=>{
        return <Clue clue={clue}
                     setClue={this.props.setClue}
                     key={index}
                     clueIsActive = {this.props.clueIsActive}/>
    })
    return (
      <div className='jeopardy-column'>
        <h3 className="clue-category" stlye={{fontSize: 17}}>{this.props.title}</h3>
        {clues}
      </div>
    );
  }
}

export default Clues;