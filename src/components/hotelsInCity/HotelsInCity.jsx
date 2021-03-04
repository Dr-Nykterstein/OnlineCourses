import React,{ useEffect, useState }  from 'react'

import GetListOfHotelInSomeCity from './GetListOfHotelsInCityCountryEct'


// import HotelInCityItem from './HotelInCityItem'
// import OnLoadingHotelInCityData from './HotelItemLoader' 

import LoadingHotelData from './HotelItemLoader' 

import './HotelsInCity.css'

function HotelsInCityExp(props) {
  //const DataLoading = OnLoadingHotelInCityData(HotelInCityItem);
  const [appState, setAppState] = useState({ loading: true, hotels: []});
  const hotels = [] 
  useEffect(()=>{
    const runEffect = async () => {
      const hotelsInfo = await GetListOfHotelInSomeCity({query: props.name});
      setAppState({ loading: false, hotels: hotelsInfo});
    }
    runEffect();
  },[])
  //<HotelInCityItem key={key} caption={item.caption} id={item.destinationId} name={item.name} geoId={item.geoId}  latitude={item.latitude} longitude={item.longitude} />
  console.log(appState.hotels);
  return (
    <div className="hotels">
    <h1>Hotels</h1>
      <div className="hotels-conteiner">
        <LoadingHotelData loading = {hotels.loading} hotels = {appState.hotels} />
      </div>
    </div>
    );
  }
  
  export default HotelsInCityExp;