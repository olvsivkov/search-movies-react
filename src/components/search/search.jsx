import React from 'react'
import './search.css'

class Search extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      search: '',
      movies: '',
      //
      selectedOption: sessionStorage.getItem('selectedOption') || '',
      //
    }
  }
  componentDidUpdate(){
    sessionStorage.setItem('movieTitle', this.state.search)
    sessionStorage.setItem('movieType', this.state.movies)
  }

  componentDidMount(){
    const movieTitle = sessionStorage.getItem('movieTitle') 
    const movieType = sessionStorage.getItem('movieType') 
    this.setState({
      search: movieTitle,
      movies: movieType,
    })
  }
 
  handleSearch = (event) => {
    this.setState({search: event.target.value})
  }

  handleChange = (event) => { // метод, чтоб записывать данные в state из формы. [] - нужны, чтоб понимать name в котором происходит событие
    //
    const selectedOption = event.target.value;
    sessionStorage.setItem('selectedOption', selectedOption);
    //
    this.setState(
      {
        [event.target.name]: event.target.value,
        selectedOption: selectedOption
      })
      
  }

  handleKey = (event) => {
    if(event.key === 'Enter') this.props.searchMovie(this.state.search, this.state.movies)
  }

  handleClear = () => {
    this.setState(
      {
        search: '',
        movies: '',
        selectedOption: '',
      }
    )
    window.sessionStorage.clear()
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
          value= {this.state.search || ''}
          onChange={this.handleSearch}
          onKeyDown={this.handleKey}
        />
        <div className='radiobuttons-wrapper'>
          
        <label className='radio-buttons'>
          <input 
            className="with-gap" 
            name="movies" 
            type="radio" 
            //
            value=' ' 
            checked={this.state.selectedOption === ' '}
            //
            onChange={this.handleChange}
            onKeyDown={this.handleKey}
            />
          <span>all</span>
        </label>
        <label className='radio-buttons'>
          <input 
            className="with-gap" 
            name="movies" 
            type="radio" 
            value='movie' 
            //
            checked={this.state.selectedOption === 'movie'}
            //
            onChange={this.handleChange}
            onKeyDown={this.handleKey}
            />
          <span>movie</span>
        </label>
        <label className='radio-buttons'>
          <input 
            className="with-gap" 
            name="movies" 
            type="radio" 
            value='series' 
            //
            checked={this.state.selectedOption === 'series'}
            //
            onChange={this.handleChange}
            onKeyDown={this.handleKey}
            />
          <span>series</span>
        </label>
      </div>
    </div>
    <button 
      className="waves-effect waves-light btn-large btn-margin" 
      onClick={() => searchMovie(this.state.search, this.state.movies)}>Search
    </button>
    <button 
      className="waves-effect waves-light btn-large btn-margin" 
      onClick={this.handleClear}>Clear
    </button>
  </div>
  }
}

export {Search}