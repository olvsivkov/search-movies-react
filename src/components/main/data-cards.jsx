import React from 'react'
import { CardItem } from './itemCard/item';
import './data-cards.css'
import { Preloader } from '../preloader/preloader';
import { Search } from '../search/search';
import { getRandomMoviesTitle } from '../randomMoviesTitle/randomMoviesTitle';
const API_KEY = process.env.REACT_APP_API_KEY


class CardsData extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      card: [],
      loading: true,
    };
    this.searchMovie = this.searchMovie.bind(this)
  }

  async searchMovie(movieTitle = '', movieType = ''){
    try {
      this.setState({loading: true})
      const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${movieTitle}&type=${movieType}`)
      const data = await res.json();
      const filteredData = data.Search.filter(item => item.Poster !== 'N/A')
      this.setState({card: filteredData, loading: false}) 
    }
    catch(err){
      console.error(err)
      this.setState({loading: false})
    }
    finally {
      console.log('fetch function is finished')
    }
  }

  componentDidMount(){
    const movieTitle = sessionStorage.getItem('movieTitle')
    const movieType = sessionStorage.getItem('movieType')
    if(movieTitle) {this.searchMovie(movieTitle, movieType)}
    else {this.searchMovie(getRandomMoviesTitle())} 
  }
 

  render() {
    const data = this.state.card
   return <div>
    <Search searchMovie={this.searchMovie}/>
    
    <div className='items-wrapper'>{
      this.state.loading ? <Preloader/> : data ? data.map(item => <div key={item.imdbID}>
        <CardItem {...item}/>
        </div>) : <h4>Nothing found</h4>
      
      }
    </div>
   </div>
  }
}

export default CardsData