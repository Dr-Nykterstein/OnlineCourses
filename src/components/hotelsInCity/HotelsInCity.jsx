import React,{ useEffect, useState }  from 'react'

import SearchByKeyWord from '../getFromApi/SearchByKeyWord'

import HotelInCityItem from './HotelInCityItem'

import './HotelsInCity.css'


function HotelsInCityExp(props) {
  const [appState, setAppState] = useState([{}])
  
  useEffect(()=>
  SearchByKeyWord(props.name)
  .then(res => {
    setAppState(res.data.suggestions[1].entities);
  })
  .catch(error => {
    console.log(error)  
  }),[setAppState]
  )
  

  return (
    <div className="hotels">
      <h1>Hotels</h1>
      <div className="hotels-conteiner">
        <div className="hotels-wrapper">
          <ul className="hotels-items-container">
            {appState.map((item,key) => (
              <HotelInCityItem key={key} caption={item.caption} id={item.destinationId} name={item.name} geoId={item.geoId}  latitude={item.latitude} longitude={item.longitude} />
            ))}
          </ul>
        </div>
      </div>
    </div>
    );
}

export default HotelsInCityExp;