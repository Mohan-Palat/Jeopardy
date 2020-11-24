import React, { Component } from 'react';


class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 15,
    };
  }
  componentDidMount() {
    console.log('In Mount')
    this.interval = setInterval(() => this.timer(), 1500);
  }
  render() {
    return (
      <>
        <p>Seconds {this.state.seconds}</p>
      </>
    )
  }
  timer() {
    this.setState({
      seconds: this.state.seconds - 1
    })
    // If timer expires
    if (this.state.seconds === 0) {
      // Consider it as a wrong answer and call setScore with empty string
      this.props.setScore('')
    }
  }

  componentWillUnmount() {
    console.log('In unmount')
    clearInterval(this.interval);
  }
}

export default Timer;