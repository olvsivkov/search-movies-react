import React from 'react'
import { CardItem } from './itemCard/item';
import './data-cards.css'

class CardsData extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      card: [],
    };
  }

  handleGetUrl = async() => {
    const url = 'http://www.omdbapi.com/?apikey=c56e662a&s=matrix&page=1'
    try {
      const res = await fetch(url)
      const data = await res.json();
      this.setState({card: data.Search}) // записал в стейт все карточки в массив
    }
    catch(err){
      console.log(err)
    }
    finally {
      console.log('fetch function is finished')
    }
  }

  handleShowCard = () =>{
    this.setState(console.log())
    
  }


  componentDidMount(){
    this.handleGetUrl()
    this.handleShowCard()
  }

  render() {
   return <div className='items-wrapper'>
    {this.state.card.map(item => <div>
      <CardItem 
        Title={item.Title}
        Poster={item.Poster}
        Type={item.Type}
        Year={item.Year}
        Id={item.imdbID}
        />
      </div>)}
   </div>
  }
}

export default CardsData