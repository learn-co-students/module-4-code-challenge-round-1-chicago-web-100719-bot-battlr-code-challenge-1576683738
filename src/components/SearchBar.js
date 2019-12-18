import React, {Component} from 'react'

export default class SearchBar extends Component {
  render(){
    return(
      <div className="searchBar">
        Filter By Class:
        <select onChange={this.props.addFilter}>
          <option value="All">All</option>
          <option value="Support">Support</option>
          <option value="Assault">Assault</option>
          <option value="Defender">Defender</option>
        </select>
      </div>
    )
  }
}