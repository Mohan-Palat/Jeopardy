import React, { Component } from 'react';
import Category from './Category';

class Gameboard extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <>
      <h3>Gameboard</h3>
      <Category/>
      </>
    );
  }
}

export default Gameboard;