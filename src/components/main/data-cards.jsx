import React from 'react'
import { CardItem } from './itemCard/item';
import './data-cards.css'
import { Preloader } from '../preloader/preloader';
import { Search } from '../search/search';

class CardsData extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      card: [],
    };
  }

  searchMovie = async(arg) => {
    try {
      const res = await fetch(`http://www.omdbapi.com/?apikey=c56e662a&s=${arg}&page=1`)
      const data = await res.json();
      this.setState({card: data.Search}) 
    }
    catch(err){
      console.log(err)
    }
    finally {
      console.log('fetch function is finished')
    }
  }

  render() {
   return <div>
    <Search searchMovie={this.searchMovie}/>
    <div className='items-wrapper'>{
      this.state.card.length ? this.state.card.map(item => <div key={item.imdbID}>
        <CardItem {...item} // спред заменяет закомментированный код ниже
          /*Title={item.Title}
          Poster={item.Poster}
          Type={item.Type}
          Year={item.Year}*/
          />
        </div>): <Preloader/>
      }
    </div>
   </div>
  }
}

export default CardsData