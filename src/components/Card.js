import React from 'react'
import '../App.css'

function Card(props) {
  return (
    <div className='card'>
        <img src={props.card.imageUrl} alt='mount-fuji' className='card--image'/>
        <div className='card--info'>
            <div className='card--location'>
                <p className='card--place'>{props.card.location}</p>
                <small className='card--maps'><a href={props.card.googleMapsUrl} target='_blank'>View on Google Maps</a></small>
            </div>
            <h1 className='card--title'>{props.card.title}</h1>
            <span className='card--date'>{props.card.startDate} - {props.card.endDate}</span>
            {/* <span className='card--date'></span> */}
            <p className='card--description'>{props.card.description}</p>
        </div>
    </div>
  )
}

export default Card