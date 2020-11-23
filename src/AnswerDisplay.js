import React, { Component } from 'react'

class AnswerDislay extends Component {
    render(){
        let displayResult = <p>Correct!</p>
        console.log('User response', this.props.answeredCorrectly)
        if(!this.props.answeredCorrectly){
            displayResult = <p>Sorry, the correct response was {this.props.answer}</p>
        }
        return(
            <>
                {this.props.showAnswer ? displayResult : ''}
            </>
        )
    }
}

export default AnswerDislay