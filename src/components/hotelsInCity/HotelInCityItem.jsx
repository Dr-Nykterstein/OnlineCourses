import React, { useEffect, useState} from 'react'

const HotelInCityItem = (props) => {
    const [appState, setAppState] = useState([{}])
        
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