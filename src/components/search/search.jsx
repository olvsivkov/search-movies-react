import React from 'react'

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
    <div className="input-field col s12">
      <input 
        className="validate"
        placeholder='Search'
        id="text"
        type="text"
        value= {this.state.search}
        onChange={this.handleSearch}
      />
      <span><button className="waves-effect waves-light btn-large" onClick={() => searchMovie(this.state.search)}>Search</button></span>
    </div>
  </div>
  }

}

export {Search}