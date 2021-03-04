import React from 'react'

const HotelInCityItem = (props) => {   
    return (
        <>
            <li className='hotels-item-container'>
                <figure className='hotels-item-pic-wrap'>
                    
                </figure>
                <div className='hotel-info'>
                    <h1>{props.name}</h1>
                </div>
        
            </li>
        </>
    )
}

export default HotelInCityItem