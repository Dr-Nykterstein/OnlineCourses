import './Apartments.css';
import React, { useEffect, useState } from 'react'

import CardHorizontal from '../cards/CardHorizontal';

import '../cards/Cards.css';
import '../cards/CardsHorizontal.css';
import './LoaderIco.css'

import hotelsService from '../../services/hotelsService'

function ApartmentsExp(props) {
  const [hotelsList, setHotelsList] = useState([]);
  const [hotel, setHotel] = useState();
  const [hotelsBaseInfo, setHotelsBaseInfo] = useState([]);
  const [counter, setCounter] = useState(-1);
  useEffect (()=>{
    hotelsService.searchHotelByLocation({query: props.name})
    .then(({data}) =>{
      setHotelsBaseInfo(data.data.suggestions[1].entities);
      setCounter(counter + 1);
    })
    .catch((error)=>{
      console.error(error);
      Promise.resolve({});
    })
  },[])
  
  useEffect (()=>{
    if(hotelsBaseInfo[counter] !== undefined){
      hotelsService.getHotelDetails({ id: hotelsBaseInfo[counter].destinationId })
      .then(({data}) =>{
        const newHotel = {
          name: hotelsBaseInfo[counter].name,
          overview: data.data.data.body.overview.overviewSections[0].content.join(), 
          address: data.data.data.body.propertyDescription.address.fullAddress, 
          starRating: data.data.data.body.propertyDescription.starRating,
          guestRating: data.data.data.body.guestReviews.formattedRating
        };
        setHotel(newHotel);
      })
      .catch((error)=>{
        console.error(error);
        Promise.resolve({});
      })
    }
  },[counter])
  
  useEffect (()=>{
    if(hotelsBaseInfo[counter] !== undefined){
      hotelsService.getHotelPhotosById({ id: hotelsBaseInfo[counter].destinationId})
      .then(({data}) =>{
        const newHotel = {...hotel,
          pictUrl: data.data.hotelImages[0].baseUrl.replace('{size}',data.data.hotelImages[0].sizes[0].suffix)
        };
        if(hotelsBaseInfo[counter] !== undefined){
          if(counter < hotelsBaseInfo.length){
            setHotelsList([...hotelsList,newHotel]);
            setCounter(counter + 1);
          }
        }
      })
      .catch((error)=>{
        console.error(error);
        Promise.resolve({});
      })
    }
  },[hotel])
  if(counter == 0){
    return (
      <div className='cards'>
        <div className='cards-container'>
          <div className='cards-wrapper'>
          <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
          </div>
        </div>
      </div>)
  }
  else{
    return (
      <div className='cards'>
        <div className='cards-container'>
          <div className='cards-wrapper'>
            {hotelsList.map((item,key)=>{
              return (<ul className='cards-items' key={key}>
                <CardHorizontal class='fixed-size'
                  src={item.pictUrl}
                  title={item.name}
                  city={item.address}
                  description={item.overview}
                  starRating={item.starRating}
                  rating={item.guestRating}
                  path=''
                />
              </ul>)
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default ApartmentsExp;
