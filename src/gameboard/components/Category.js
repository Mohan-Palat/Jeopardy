import React, { Component } from 'react';
import Clues from './Clues';

class Category extends Component {

  render() {
    return (
      <div className='jeopardy-column'>
      <h3 className='category-heading'>{this.props.title}</h3>
      <Clues clues = {this.props.clues} 
             setClue={this.props.setClue}/>
      </div>
    );
  }
}

export default Category;