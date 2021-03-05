import React, { useEffect, useState } from 'react'

import SearchByKeyWord from '../../services/SearchByKeyWord'

import CardHorizontal from '../cards/CardHorizontal';

import '../cards/Cards.css';
import '../cards/CardsHorizontal.css';

function HotelsInCityExp(props) {

  const [appState, setAppState] = useState([{}])


  useEffect(() => {
    const runEffect = async () => {
      await SearchByKeyWord({ query: props.name })
        .then(res => {
          setAppState(res.data.suggestions[1].entities);
        })
        .catch(error => {
          console.log(error)
        })
    }
    runEffect();
  }, [])

  return (
    <div className='cards'>
      <div className='cards-container'>
        <div className='cards-wrapper'>
          {appState.map((item, key) => (
            <ul className='cards-items' key={key}>
              <CardHorizontal class='fixed-size'
                src='https://insightintoukraine.com/wp-content/uploads/2019/11/Bukovel-Ski-Resort.jpg'
                title={item.name}
                city='Lviv,Lviv Oblast,Ukraine'
                description="Featuring free Wi-Fi and a sauna, Villa Stanislavsky Hotel is located 20 minutes' walk from Mickiewicz Square in Lviv city. Rooms are fitted with air conditioning."
                starRating='5'
                rating='9.3'
                path=''
              />
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HotelsInCityExp;