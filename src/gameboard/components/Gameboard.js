import React, { Component } from 'react';
// import Category from './Category';
import Clues from './Clues';

class Gameboard extends Component {

  render() {

    let catsToRender;
    console.log('current state (render before if): ',this.props.categories);

    if(this.props.categories.length === 6){
         console.log('catergoies has data!')
         catsToRender = this.props.categories.map((category)=>{
            return <Clues title={category.title}
                              clues={category.clues}
                              setClue={this.props.setClue}
                              key = {category.id}
                              clueIsActive = {this.props.clueIsActive}/>
        });
    }
    else{
        console.log('no cats!!!')
        catsToRender = <></>;
    }
    
    return (
      <div className="gameboard">
       {catsToRender}
      </div>
    );
  }
}

export default Gameboard;