import React, { Component } from 'react';
import Clues from './Clues';

class Category extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <>
      <h3>{this.props.title}</h3>
      <Clues clues = {this.props.clues} 
             setClue={this.props.setClue}/>
      </>
    );
  }
}

export default Category;