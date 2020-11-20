import React, { Component } from 'react';
import Category from './Category';
import category from '../../testing/category'

class Gameboard extends Component {
  constructor(props){
    super(props);
  }
  
  render() {

    // Get 6 random numbers and put them in array
    const categoryIDs = [];

    // For each category ID, get category data from axios
    // and make Category component
    const categories = categoryIDs.map((id)=>{

        // for each ID call axios to get category
        const category = {title:'',clues:[]};
        // get category from axios and pass title and clues to Component
        return <Category title={category.title}
                         clues={category.clues}
                         setClue={this.props.setClue}/>
    })

    return (
      <>
      <h3>Gameboard</h3>
      <Category title = {category.title} 
                clues = {category.clues} 
                setClue={this.props.setClue}/>
       {/* {categories} */}
      </>
    );
  }
}

export default Gameboard;