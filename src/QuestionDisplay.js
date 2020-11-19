import React, { Component } from 'react'

class QuestionDislay extends Component {
    render(){
        return(
            <>
            <p>Question Display: {this.props.question}</p>
            </>
        )
    }
}

export default QuestionDislay