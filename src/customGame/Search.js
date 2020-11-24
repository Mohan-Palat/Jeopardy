import React, { Component } from 'react';
import Select from 'react-select';
import categories from '../data/categories'

class Search extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            curValue: 0,
            options: this.props.categoriesHash.map((cat)=>{
                    return {value: cat.id,
                            label: cat.category};
                    })
        }
    }

    getIndexFromValue=(value)=>{
      let returnVal = -1;
      this.state.options.forEach((option,index)=>{
        if(option.value===value){
          returnVal = index;
        }
      });

      return returnVal;
    }
    // change state to currently selected value
    handleChange = (e)=>{
        this.setState({
            curValue: e.value,
        })
    }

    // pass ID up to App
    handleSubmit = (e)=>{
      e.preventDefault();
      let tmpOptions = this.state.options;
      
      // get index of selected option
      const indexToRemove = this.getIndexFromValue(this.state.curValue);

      // Remove at selected Index
      tmpOptions = tmpOptions.splice(indexToRemove,1);
      
      console.log('[Search.js] tmpOptions:',tmpOptions);
      this.setState({
        options: tmpOptions
      });

      this.props.addSearch(this.state.curValue);
  }

  getAvailableOptions(selectedIds){

  }

  render() {
    const allCategories = this.props.categoriesHash

    //loop through categories and match with categories data file to display topics on screen
    let categories = allCategories.filter((id) => {
      
    })

    return (
      <>
        <form onSubmit = {this.handleSubmit}>
            <Select options={this.state.options} onChange={this.handleChange}/>
            <input type="submit" value="submit"/>
        </form>
        <h3>Selected Categories</h3>

      </>
    );
  }
}

export default Search;