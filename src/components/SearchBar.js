import React, {Component} from 'react'

export default class SearchBar extends Component {
  state = {
    search: ''
  }

  handleChange = e => {
    this.setState({
      search: e.target.value
    }, console.log(this.state.search))
  }


  render(){
    return(
      <div className="searchBar">
        <div className="filter">
          Filter By Class:
          <select onChange={this.props.addFilter}>
            <option value="All">All</option>
            <option value="Support">Support</option>
            <option value="Assault">Assault</option>
            <option value="Defender">Defender</option>
          </select>
        </div>
        <div className="search">
          Search By Name: 
          <input type="text" name="search" onChange={this.handleChange}/>
          <button onClick={() => this.props.searchBots(this.state.search)}>Search</button>
          <button onClick={() => this.props.searchBots(null)}>Back To All</button>
        </div>
      </div>
    )
  }
}