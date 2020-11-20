import React, { Component } from 'react';
import Category from './Category';
import category from '../../testing/category'
import axios from 'axios';

class Gameboard extends Component {
  constructor(props){
      super(props);

      this.state = {
          categories: []
      }
  }

  getCategoryFromID = (id) =>{
    const jserviceURL = 'http://jservice.io/api/category?id='+id;
        return axios.get(jserviceURL)
  }

  /**
   * 
   * @param {*} numbers Array of ID numbers
   */
  getCategoriesFromIDs = (numbers) =>{
    numbers.forEach((id)=>{
        this.getCategoryFromID(id)
        .then((response)=>{
            console.log('axios data:',response.data)

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
    const categoryIDs = [14124];

    this.getCategoriesFromIDs(categoryIDs);
    
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
    
    console.log('current state (render after if): ',this.state.categories);
    console.log('cats to render:',catsToRender);
    return (
      <>
      <h3>Gameboard</h3>
       {catsToRender}
      </>
    );
  }
}

export default Gameboard;