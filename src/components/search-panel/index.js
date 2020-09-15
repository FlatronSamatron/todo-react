import React from 'react'
import './search-input.css'

export default class extends React.Component {

    state={
      value:""
    }

    onSearchChange = (e) => {
        const value = e.target.value
        this.setState({
          value 
        })
        this.props.changeTerm(value)
    }
    

    render(){
      return(
          <input type="text"
          className="search-input"
          placeholder="search"
          value={this.state.value}
          onChange={this.onSearchChange}
          />
      )
    }
  }