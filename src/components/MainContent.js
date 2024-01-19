import React from 'react'
import Card from './Card'
import data from '../data'

const MainContent = () => {
    const cards = data.map(item => {
        return (
            <Card
                title={item.title}
                location={item.location}
                googleMapsUrl={item.googleMapsUrl}
                startDate={item.startDate}
                endDate={item.endDate}
                description={item.description}
                imageURL={item.imageURL}
            />
        )
    })
    return (
        <div className='main-content'>
            {cards}
        </div>
    )
}

export default MainContent
