import React, { Component } from 'react';
import Category from './Category';
import category from '../../testing/category'

class Gameboard extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <>
      <h3>Gameboard</h3>
      <Category title = {category.title} clues = {category.clues}/>
      </>
    );
  }
}

export default Gameboard;