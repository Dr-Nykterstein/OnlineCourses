import React, { useEffect, useState } from 'react'

import SearchByKeyWord from '../../services/SearchByKeyWord'
import CardHorizontal from '../cards/CardHorizontal';
import GetListHotelsInCity from '../../models/Hotel';



import '../cards/Cards.css';
import '../cards/CardsHorizontal.css';


import hotelsService from '../../servicess/hotelsService'




function HotelsInCityExp(props) {

  const [hotels, setHotels] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect (()=>{
    setLoading(true);
    
    hotelsService.searchHotelByLocation({query:'new york'})
    .then(res =>{
        setHotels(res);
    })
    .catch(error=>{
      console.error(error);
      Promise.resolve({});
    })
    .finally(() =>{
      setLoading(false);
    })
  },[])
  console.log(hotels);
  return(
    <>
    </>
  );
  
  
  
  
  // const [baseInf, setBaseInf] = useState([]);
  // useEffect(() => {
  //   const runEffect = async ()=>{
  //       await SearchByKeyWord({ query: props.name })
  //       .then(res => {
  //         setBaseInf(res.data.suggestions[1].entities);
  //       })
  //       .catch(error => {
  //         console.log(error)
  //       })
  //   }
  //   runEffect();
  // }, []);

  // const [appState,setAppState] = useState();
  // useEffect(() => {
  //   const WaitForPromises = async () =>{
  //     await GetListHotelsInCity({baseInfo: baseInf})
  //     .then(res => {
  //       console.log(res);
  //       setAppState(res);
  //     });
  //   }
  //   WaitForPromises();
  // // }, []);
  // const modelsList = [];

  // const [detailInfo,setDetailInfo] = useState();
  
  // const WaitForPromises = async () =>{ 
  //   const res = await GetListHotelsInCity({name: props.name})
    
  //     let details = [];
  //     details = await Promise.all(res[1]).then(el=> {return el});
  //     let pictures = [];
  //     pictures = await Promise.all(res[2]).then(el=> {return el});
  //     if(details.length != 0 && res[0].length != 0 && pictures.length != 0){
  //       for(let i = 0; i < res[0].length; i++){
  //         if(pictures[i] !== undefined && res[0][i] !== undefined && details[i] !== undefined){
  //           console.log(pictures[i].pictUrl,res[i].name,details[i].address,details[i].overview,details[i].starRating);
  //           cards.push(
  //             <ul className='cards-items' >
  //               <CardHorizontal class='fixed-size'
  //                 src={pictures[i].pictUrl}
  //                 title={res[0][i].name}
  //                 city={details[i].address}
  //                 description={details[i].overview}
  //                 starRating={details[i].starRating}
  //                 rating=''
  //                 path=''
  //                 />
  //             </ul>)
  //         } 
  //       }
  //     }
  //     return res;
  //   }
  //   WaitForPromises();
  //   console.log(cards);
  // {cards.map((item,key)=> <div key = {key}>{item}</div>)}
  //   return (
  //     <div className='cards'>
  //     <div className='cards-container'>
  //     <div className='cards-wrapper'>
  //     </div>
  //     </div>
  //     </div>
  // );
}

export default HotelsInCityExp;