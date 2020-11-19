import React, { Component } from 'react'

class QuestionDislay extends Component {
    render(){
        let question = <p>Please select a question</p>
        if(this.props.question){
            question = <p>Question Display: {this.props.question}</p>
        }
        return(
            <>
            {question}
            </>
        )
    }
}

export default QuestionDislay