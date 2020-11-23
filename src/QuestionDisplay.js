import React, { Component } from 'react'

class QuestionDislay extends Component {
    render(){
        let question = <p>Please select a question</p>
        if(this.props.question){
            question = <h3>Question Display: {this.props.question}</h3>
        }
        return(
            <>
            {question}
            </>
        )
    }
}

export default QuestionDislay