import React from 'react'
import PinIcon from "../images/locationPin.svg"

const Card = (props) => {
    return (
        <div className='card'>
            <img src={props.imageURL} alt="" className='card--location-image'></img>
            <div className='card--info'>
                <div className='location'>
                    <img src={PinIcon} alt="" className='location-pin-icon' />
                    <span className='location--country'>{props.location}</span>
                    <a href={props.googleMapsUrl} className='map-link'>View on Google Maps</a>
                    <h1 className='location--place'>{props.title}</h1>
                </div>
                <div className="travel-date">
                    <span className='start-date'>{props.startDate}</span> - <span className='end-date'>{props.endDate}</span>
                </div>
                <div className='description'>{props.description}</div>
            </div>
        </div>
    )
}

export default Card
