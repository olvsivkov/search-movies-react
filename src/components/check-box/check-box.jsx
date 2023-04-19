import React from 'react'

class RadioButtonFilter extends React.Component {

  state = {
    movies: '',
  }

  handleChange = (event) => { // метод, чтоб записывать данные в state из формы. [] - нужны, чтоб понимать name в котором происходит событие
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    return <div>
      <label>
        <input className="with-gap" name="movies" type="radio" value='all' checked="checked" onChange={this.handleChange}/>
        <span>all</span>
      </label>
      <label>
        <input className="with-gap" name="movies" type="radio" value='movie' onChange={this.handleChange}/>
        <span>movie</span>
      </label>
      <label>
        <input className="with-gap" name="movies" type="radio" value='series' onChange={this.handleChange}/>
        <span>series</span>
      </label>
    </div>
  }

}

export {RadioButtonFilter}