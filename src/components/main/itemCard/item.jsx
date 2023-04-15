import React from 'react'
import '../data-cards.css'

export function CardItem(props) {
  const {Title, Poster, Type, Year, Id} = props;
  return <div className="row">
    <div id='cards-height' className="col s12 m7 ">
      <div className="card">
        <div className="card-image">
          <img src={Poster} alt='movie img'/>
        </div>
        <div>
        <h5 className="card-title">{Title}</h5>
        </div>
        <div className="card-content">
          <p>{Type}</p>
        </div>
        <div className="card-action">
          <p>{Year}</p>
        </div>
      </div>
    </div>
  </div>
}