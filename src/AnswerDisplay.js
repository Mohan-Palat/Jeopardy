import React, { Component } from 'react'

class AnswerDislay extends Component {
    render(){
        
        return(
            <>
                {this.props.showAnswer ? <p>The correct answer is: {this.props.answer}</p> : ''}
            </>
        )
    }
}

export default AnswerDislay