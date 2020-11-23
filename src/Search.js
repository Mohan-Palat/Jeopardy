import React, { Component } from 'react';
import categories from './data/categories'
class Search extends Component {

    findIDFromSearchTerm = (str)=>{
        let returnVal = -1;
        categories.forEach((cat)=>{
            if(cat.category.toLowerCase()===str.toLowerCase()){
                returnVal = cat.id
            }
        });

        return returnVal;
    }

    handleClick = (e)=>{
    e.preventDefault();
    const searchTerm = e.target[0].value;
    console.log(this.findIDFromSearchTerm(searchTerm));

    e.target[0].value='';
  }
  render() {
    return (
      <>
        <form onSubmit={this.handleClick}>
            <input type ="text" placeholder="Enter desired category"/>
            <input type = "submit" value ="Submit"/>
        </form>
      </>
    );
  }
}

export default Search;