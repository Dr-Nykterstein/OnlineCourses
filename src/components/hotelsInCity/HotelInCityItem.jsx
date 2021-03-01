import React, { useEffect, useState} from 'react'
import CardItem from '../cards/CardItem'
import GetDetails from '../getFromApi/GetDetails'

const HotelInCityItem = (props) => {
    const [appState, setAppState] = useState([{}])
    useEffect(()=>
        GetDetails(props.id)
        .then(res => {
            setAppState(res.data.data.body.overview.overviewSections);
        })
        .catch(error => {
            console.log(error)  
        }),[setAppState]
        )
        // <div className='hotel-info'>
        //     <h1>{props.name}</h1>
        //     {appState.map((item,key) => {
               
        //         // <h3>{item.title}</h3>
        //     })
        //     }
        // </div>
    return (
        <>
            <li className='hotels-item-container'>
                <figure className='hotels-item-pic-wrap'>
                    <img
                    className='hotels-item-img'
                    alt={`Img`}
                    src=''
                    />
                </figure>
            </li>
        </>
    )
}

export default HotelInCityItem