import React, { Component } from 'react';


class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 10,
    };
  }
  componentDidMount() {
    console.log('In Mount')
    this.interval = setInterval(() => this.timer(), 1000);
  }
  render() {
    return (
      <>
        <h1>Seconds {this.state.seconds}</h1>
      </>
    )
  }
  timer() {
    this.setState({
      seconds: this.state.seconds - 1
    })
    if (this.state.seconds === 0) {
      this.props.setScore('')
    }
  }

  componentWillUnmount() {
    console.log('In unmount')
    clearInterval(this.interval);
  }
}

export default Timer;