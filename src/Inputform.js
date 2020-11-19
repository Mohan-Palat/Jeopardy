import React, { Component } from 'react';

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
        <h3>Input Form</h3>
        <form onSubmit={this.handleSubmit}>
          <input    type="text"
                    onChange={this.onTextBoxChange}
                    placeholder="Anwser here" />
          <button type="submit">Submit Answer</button>
        </form>
      </>
    );
  }

  onTextBoxChange = (event) => {
    // console.log ('Response', )

    this.setState({
      response: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // console.log ('User response from inputform', this.state.response)
    this.props.setScore(this.state.response)

  }


}

export default Inputform;