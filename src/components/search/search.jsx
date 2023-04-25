import React from 'react'
import './search.css'

class Search extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      search: '',
      movies: '',
    }
  }

  handleSearch = (event) => {
    this.setState({search: event.target.value})
  }

  handleChange = (event) => { // метод, чтоб записывать данные в state из формы. [] - нужны, чтоб понимать name в котором происходит событие
    this.setState(
      {
        [event.target.name]: event.target.value,
      })
  }

  handleKey = (event) => {
    if(event.key === 'Enter') this.props.searchMovie(this.state.search, this.state.movies)
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
          onKeyDown={this.handleKey}
        />
        <div>
        <label className='radio-buttons'>
          <input 
            className="with-gap" 
            name="movies" 
            type="radio" 
            value='' 
            onChange={this.handleChange}/>
          <span>all</span>
        </label>
        <label className='radio-buttons'>
          <input 
            className="with-gap" 
            name="movies" 
            type="radio" 
            value='movie' 
            onChange={this.handleChange}/>
          <span>movie</span>
        </label>
        <label className='radio-buttons'>
          <input 
            className="with-gap" 
            name="movies" 
            type="radio" 
            value='series' 
            onChange={this.handleChange}/>
          <span>series</span>
        </label>
      </div>
    </div>
    <button 
      className="waves-effect waves-light btn-large btn-margin" 
      onClick={() => searchMovie(this.state.search, this.state.movies)}>Search</button>
  </div>
  }

}

export {Search}