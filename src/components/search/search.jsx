import React from 'react'
import './search.css'

class Search extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      search: '',
    }
  }

  handleSearch = (event) => {
    this.setState({search: event.target.value})
  }

  render() {
    const {searchMovie} = this.props
    return  <div className="row">
    <div className="input-field col s12 search-movies">
      <input 
        className="validate input-search"
        placeholder='Search'
        id="text"
        type="text"
        value= {this.state.search}
        onChange={this.handleSearch}
      />
      <button className="waves-effect waves-light btn-large" onClick={() => searchMovie(this.state.search)}>Search</button>
    </div>
  </div>
  }

}

export {Search}