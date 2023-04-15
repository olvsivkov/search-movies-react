import React from 'react'
import { CardItem } from './itemCard/item';
import './data-cards.css'
import { Preloader } from '../preloader/preloader';

class CardsData extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      card: [],
    };
  }

  handleGetUrl = async() => {
    const url = 'http://www.omdbapi.com/?apikey=c56e662a&s=star wars&page=1'
    try {
      const res = await fetch(url)
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

  componentDidMount(){
    this.handleGetUrl()
  }

  render() {
   return <div className='items-wrapper'>{
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
  }
}

export default CardsData