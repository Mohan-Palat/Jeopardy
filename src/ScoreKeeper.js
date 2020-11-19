import React, { Component } from 'react'

class ScoreKeeper extends Component {
    render(){
        return(
            <div className="score-keeper">
                <h3>Your score: {this.props.score}</h3>
            </div>
        )
    }
}

export default ScoreKeeper