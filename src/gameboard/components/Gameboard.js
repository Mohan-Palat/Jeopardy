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
    let cats = []
    numbers.forEach((id)=>{
        this.getCategoryFromID(id)
        .then((response)=>{
            //console.log(response.data)

            cats.push(response.data)
        })
        .catch((error)=>{
            console.log(error);
        })
    });

    //console.log(cats)
    return cats;
  }

  componentDidMount() {
    // Get 6 random numbers and put them in array
    const categoryIDs = [14124];

    const cats = this.getCategoriesFromIDs(categoryIDs);
    // // For each category ID, get category data from axios
    // // and make Category component
    // const cats = categoryIDs.map((id)=>{
    //     // for each ID call axios to get category
    //     const category = {title:'',clues:[]};
    //     // get category from axios and pass title and clues to Component
    //     return <Category title={category.title}
    //                      clues={category.clues}
    //                      setClue={this.props.setClue}/>
    // });

    this.setState({
        categories: {cats}
    });
    
  }

  render() {

    //     // For each category ID, get category data from axios
    // // and make Category component
    // const categories = categoryIDs.map((id)=>{
    //     // for each ID call axios to get category
    //     const category = {title:'',clues:[]};
    //     // get category from axios and pass title and clues to Component
    //     return <Category title={category.title}
    //                      clues={category.clues}
    //                      setClue={this.props.setClue}/>
    // })
    //console.log(this.state.categories)
    let catsToRender;
    if(this.state.categories > 0){
         catsToRender = this.state.categories||[].map((category)=>{
            return <Category title={category.title}
                              clues={category.clues}
                              setClue={this.props.setClue}/>
        });
    }
    else{
        catsToRender = <></>;
    }
    
    console.log('cats to render:',catsToRender);
    return (
      <>
      <h3>Gameboard</h3>
      {/* <Category title = {category.title} 
                clues = {category.clues} 
                setClue={this.props.setClue}/> */}
       {catsToRender}
      </>
    );
  }
}

export default Gameboard;