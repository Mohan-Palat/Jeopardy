import React, { Component } from 'react';

class NewGame extends Component {
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit} >
          <button type="submit">New Game</button>
        </form>
      </>
    );
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // console.log ('User clicked new game')
    this.props.getCategoryIds()
  }
}

export default NewGame;