import React from 'react'
import '../data-cards.css'
const API_KEY = process.env.REACT_APP_API_KEY

class CardItem extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      plot: '',
      director: '',
      rating: '',
    }
  }

  handleFullPlot = async() => {
    try {
      const {imdbID} = this.props;
      const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&plot=full&i=${imdbID}`)
      const data = await res.json();
      const fullPlot = data.Plot
      const director = data.Director
      const rating = data.Ratings[0].Value
      this.setState({
        plot: fullPlot,
        director: director,
        rating: rating,
      }) 
    }
    catch(err){
      console.error(err)
      this.setState({loading: false})
    }
    finally {
      console.log('fetch function is finished')
    }
  }

  render(){
    const {Title, Poster, Type, Year} = this.props;
    return <div className="row">
      <div id='cards-height' className="card">
        <div>
          <div 
            className="card-image waves-effect waves-block waves-light"
            onClick={this.handleFullPlot}>
            <img className="activator" src={Poster} alt='movie img'/>
          </div>
          <div className="card-content bg-color-content">
            <p className="card-title activator grey-text text-darken-4 title-font">{Title}</p>
            <div className="type-year-wrapper">
              <p>Type: {Type}</p>
              <p>Year: {Year}</p>
            </div>
            <span 
              className="activator more"
              onClick={this.handleFullPlot}  
            >more information</span>
          </div>
        </div>
        <div className="card-reveal bg-color-content">
          <span className="card-title grey-text text-darken-4">
            <i className="material-icons right font">x</i>
          </span>
          <span className="card-title grey-text text-darken-4 title-font">{Title}</span>
          <p>{this.state.plot}</p>
          <p>{Type === 'series' ? " ": `director: ${this.state.director}`}</p>
          <p>rating from "Internet Movie Database": {this.state.rating}</p>
        </div>
      </div>
    </div>
  }
}


export {CardItem}

/*
import React from 'react'
import '../data-cards.css'

export function CardItem(props) {
  const {Title, Poster, Type, Year} = props;
  return <div classNameName="row">
    <div id='cards-height' classNameName="col s12 m7 ">
      <div classNameName="card">
        <div classNameName="card-image">
          <img src={Poster} alt='movie img'/>
        </div>
        <div>
        <h5 classNameName="card-title">{Title}</h5>
        </div>
        <div classNameName="card-content">
          <p>{Type}</p>
        </div>
        <div classNameName="card-action">
          <p>{Year}</p>
        </div>
      </div>
    </div>
  </div>
}*/