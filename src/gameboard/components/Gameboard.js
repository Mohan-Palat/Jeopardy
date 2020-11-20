import React, { Component } from 'react';
import Category from './Category';
import axios from 'axios';

class Gameboard extends Component {
  constructor(props){
      super(props);

      this.state = {
          categories: []
      }
  }

  // Calls jservice API to get a single category by ID
  getCategoryFromID = (id) =>{
    const jserviceURL = 'http://jservice.io/api/category?id='+id;
        return axios.get(jserviceURL)
  }

  /**
   * Given an array of numbers, pull data from jservice API by id for each number
   * @param {*} numbers Array of ID numbers
   */
  getCategoriesFromIDs = (numbers) =>{
    console.log('get categories from ids: ', numbers)
    numbers.forEach((id)=>{
        this.getCategoryFromID(id)
        .then((response)=>{

            //Push API output into categories array
            this.setState(prevState=>({
                categories:[...prevState.categories,response.data]
            }));
        })
        .catch((error)=>{
            console.log(error);
        })
    });

  }

  componentDidMount() {
    // Get 6 random numbers and put them in array
    const categoryIDs = [14124,12345];

    // this.getCategoriesFromIDs(categoryIDs);
    this.getCategoriesFromIDs(this.props.idNums);
    console.log(this.props.idNums)
    
    console.log('current state: ',this.state.categories);
  }

  render() {

    let catsToRender;
    console.log('current state (render before if): ',this.state.categories);

    if(this.state.categories.length > 0){
         console.log('catergoies has data!')
         catsToRender = this.state.categories.map((category)=>{
            return <Category title={category.title}
                              clues={category.clues}
                              setClue={this.props.setClue}
                              key = {category.id}/>
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