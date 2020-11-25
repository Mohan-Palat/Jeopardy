import React, { Component } from 'react';
import Select from 'react-select';
import categories from '../data/categories'

class Search extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            curValue: 0,
        }
    }

    // set state to selected value
    handleChange = (e)=>{
        this.setState({
            curValue: e.value,
        })
    }

    // pass ID up to App
    handleSubmit = (e)=>{
      e.preventDefault();

      this.props.addSearch(this.state.curValue);
  }

  // generates an array of options for the Select
  // will not accept any option that has an ID in the selectedIds array-
  // returns an array of selectable options
  getAvailableOptions(selectedIds){
    let selectableOptions = [];
    categories.forEach((cat)=>{
      if(!selectedIds.includes(cat.id)){
        const newOption = {
          value: cat.id,
          label:cat.category
        };

        selectableOptions.push(newOption);
      }
    });

    return selectableOptions
  }

  render() {
    const menuOptions = this.getAvailableOptions(this.props.selectedIDs)

    return (
      <>
        <form onSubmit = {this.handleSubmit}>
            <Select options={menuOptions} onChange={this.handleChange}/>
            <input type="submit" value="submit"/>
        </form>
        {/* <h3>Selected Categories</h3> */}

      </>
    );
  }
}

export default Search;