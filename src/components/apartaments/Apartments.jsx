import './Apartments.css';
import React, { useEffect, useState } from 'react';

import CardHorizontal from '../cards/CardHorizontal';

import '../cards/Cards.css';
import '../cards/CardsHorizontal.css';
import './LoaderIco.css';

import hotelsService from '../../services/hotelsService';

function ApartmentsExp(props) {
  const [catchProps, setCatchProps] = useState({
    name: undefined,
    start: undefined,
    end: undefined,
    adult: undefined,
    child: undefined,
  });
  const [isSearchSuccesful, setIsSearchSuccesful] = useState(true);
  const [hotelsList, setHotelsList] = useState([]);
  const [hotel, setHotel] = useState();
  const [hotelsBaseInfo, setHotelsBaseInfo] = useState([]);
  const [counter, setCounter] = useState(-1);
  useEffect(() => {
    setHotelsList([]);
    setCounter(-1);
    if (props.valueFromParent !== undefined) {
      setCatchProps(props.valueFromParent.data_from_child);
    } else {
      setCatchProps(props);
    }
  }, [props]);
  useEffect(() => {
    hotelsService
      .searchHotelByLocation({ query: catchProps.name })
      .then(({ data }) => {
        setHotelsBaseInfo(data.data.suggestions[1].entities);
        setCounter(counter + 1);
      })
      .catch((error) => {
        console.error(error);
        Promise.resolve({});
      });
  }, [catchProps]);

  useEffect(() => {
    if (hotelsBaseInfo[counter] !== undefined) {
      setIsSearchSuccesful(true);
      hotelsService
        .getHotelDetails({
          id: hotelsBaseInfo[counter].destinationId,
          checkIn: catchProps.start,
          checkOut: catchProps.end,
          adults1: catchProps.adult,
          child1: catchProps.child,
        })
        .then(({ data }) => {
          let newHotel;
          newHotel = {
            name: hotelsBaseInfo[counter].name,
            overview: data.data.data.body.overview.overviewSections[0].content.join(),
            address: data.data.data.body.propertyDescription.address.fullAddress,
            starRating: data.data.data.body.propertyDescription.starRating
          }
          if (data.data.data.body.guestReviews.brands !== undefined) {
            if ( data.data.data.body.guestReviews.brands.formattedRating !== undefined ) {
                newHotel = {...newHotel,   
                guestRating: data.data.data.body.guestReviews.brands.formattedRating,
              };
            }
            else{
              newHotel = {...newHotel,
                guestRating: Math.floor(Math.random() * 10) + '.' + Math.floor(Math.random() * 10)
              };  
            }
          } else {
            newHotel = {...newHotel,
              guestRating: Math.floor(Math.random() * 10) + '.' + Math.floor(Math.random() * 10)
            };
          }
          setHotel(newHotel);
        })
        .catch((error) => {
          console.error(error);
          setIsSearchSuccesful(false);
          Promise.resolve({});
        });
    }
  }, [counter]);

  useEffect(() => {
    if (hotelsBaseInfo[counter] !== undefined) {
      hotelsService
        .getHotelPhotosById({ id: hotelsBaseInfo[counter].destinationId })
        .then(({ data }) => {
          let newHotel;
          if (data.data.hotelImages[0] !== undefined) {
            newHotel = {
              ...hotel,
              pictUrl: data.data.hotelImages[0].baseUrl.replace(
                '{size}',
                data.data.hotelImages[0].sizes[0].suffix
              ),
            };
          }
          if (hotelsBaseInfo[counter] !== undefined) {
            if (hotelsBaseInfo.length < 5) {
              if (counter < hotelsBaseInfo.length) {
                setHotelsList([...hotelsList, newHotel]);
                setCounter(counter + 1);
              }
            } else {
              if (counter < 5) {
                setHotelsList([...hotelsList, newHotel]);
                setCounter(counter + 1);
              }
            }
          }
        })
        .catch((error) => {
          console.error(error);
          Promise.resolve({});
        });
    }
  }, [hotel]);
  if (isSearchSuccesful) {
    if (counter >= 0) {
      if (counter < 5 && counter < hotelsBaseInfo.length) {
        return (
          <div className="cards">
            <div className="cards-container">
              <div className="cards-wrapper">
                <div className="lds-roller">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        );
      } else {
        if (props != undefined) {
          return (
            <div className="cards">
              <div className="cards-container">
                <div className="cards-wrapper">
                  {hotelsList.map((item, key) => {
                    return (
                      <ul className="cards-items" key={key}>
                        <CardHorizontal
                          class="fixed-size"
                          src={item.pictUrl}
                          title={item.name}
                          city={item.address}
                          description={item.overview}
                          starRating={item.starRating}
                          rating={item.guestRating}
                          path=""
                        />
                      </ul>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        }
      }
    } else {
      return <></>;
    }
  } else {
    return (
      <div className="cards">
        <div className="cards-container">
          <div className="cards-wrapper">
            <h1>Sorry, there's no available suits :(</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default ApartmentsExp;
