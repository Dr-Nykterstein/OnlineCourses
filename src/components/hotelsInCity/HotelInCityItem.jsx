import React, { useEffect, useState} from 'react'

import GetHotelImg from './GetHotelImages'

import GetDetails from '../../services/GetDetails'

const HotelInCityItem = (props) => {
    const [appState, setAppState] = useState([{}])
    // useEffect(()=>
    // GetDetails({id: props.id, adult1: 1})
    // .then(res => {
    //     console.log(res);
    //     setAppState(res.data.data.body.overview.overviewSections);
    // })
    // .catch(error => {
    //     console.log(error)  
    // }),[setAppState]
    // )
            //     {appState.map((item,key) => {
               
        //         // <h3>{item.title}</h3>
        //     })
        //     }
        
    const srcOnPict = GetHotelImg({id: props.id}); //here is pict of your hotel 
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