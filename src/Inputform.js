import React, { Component } from 'react';
import Timer from './Timer';

class Inputform extends Component {
  constructor(props){
    super(props);

    this.state = {
        answer: '',
      }
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit} >
          <input    type="text"
                    value={this.state.answer}
                    onChange={this.onTextBoxChange}
                    placeholder="What is..."
                    disabled={this.props.isDisabled} />
          <button type="submit" disabled={this.props.isDisabled}>Submit Answer</button>
          {/* Start timer only when user clicks on a clue */}
          {!this.props.isDisabled ? <Timer setScore={this.props.setScore}/> : <div><p></p></div>}
        </form>
      </>
    );
  }

  onTextBoxChange = (event) => {

    // update this.state.answer which is the value of the input text field on the form
    this.setState({
      answer: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    
    // check if input is correct Answer and then update score
    this.props.setScore(this.state.answer)

    this.setState({
        answer: ''
    })

  }


}

export default Inputform;