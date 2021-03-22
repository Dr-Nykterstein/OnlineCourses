import React, { Component, useEffect, useState } from 'react';
import CardItem from './CardItem';

import hotelsService from '../../services/hotelsService';
import '../apartaments/LoaderIco.css';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Keyboard,
  Mousewheel,
  EffectCoverflow,
} from 'swiper';
import Swiper from 'swiper';

import 'swiper/swiper-bundle.css';
import './AdBlockCards.css';
import '../cards/Cards.css';

SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Keyboard,
  Mousewheel,
  EffectCoverflow,
]);

function AdBlock() {
  return(<></>)
  // // #region ID
  // const reservID = [
  //   '124520',
  //   '221843',
  //   '126327',
  //   '17619392',
  //   '729948288',
  //   '617591008',
  //   '804154432',
  //   '115823',
  //   '673540',
  //   '392263',
  // ];
  // //#endregion
  // const [isSearchSuccesful, setIsSearchSuccesful] = useState(true);
  // const [hotelsList, setHotelsList] = useState([]);
  // const [hotel, setHotel] = useState();
  // const [hotelIterator, setHotelIterator] = useState(-1);
  // const [swiper, setSwiper] = useState(new Swiper());
  // const [update, setUpdate] = useState(false);
  // useEffect(() => {
  //   setHotelIterator(hotelIterator + 1);
  // }, []);
  // useEffect(() => {
  //   if (hotelIterator < reservID.length &&  hotelIterator !== -1) {
  //     setIsSearchSuccesful(true);
  //     hotelsService
  //       .getHotelDetails({
  //         id: reservID[hotelIterator],
  //       })
  //       .then(({ data }) => {
  //         let newHotel = {
  //           name: data.data.data.body.propertyDescription.name,
  //           address:
  //             data.data.data.body.propertyDescription.address.fullAddress,
  //           guestRating: data.data.data.body.guestReviews.formattedRating,
  //         };
  //         if (data.data.data.body.guestReviews.brands !== undefined) {
  //           if (
  //             data.data.data.body.guestReviews.brands.formattedRating !==
  //             undefined
  //           ) {
  //             newHotel = {
  //               ...newHotel,
  //               guestRating:
  //                 data.data.data.body.guestReviews.brands.formattedRating,
  //             };
  //           } else {
  //             newHotel = {
  //               ...newHotel,
  //               guestRating:
  //                 Math.floor(Math.random() * 10) +
  //                 '.' +
  //                 Math.floor(Math.random() * 10),
  //             };
  //           }
  //         } else {
  //           newHotel = {
  //             ...newHotel,
  //             guestRating:
  //               Math.floor(Math.random() * 10) +
  //               '.' +
  //               Math.floor(Math.random() * 10),
  //           };
  //         }
  //         setHotel(newHotel);
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //         setIsSearchSuccesful(false);
  //         Promise.resolve({});
  //       });
  //   } else {
  //     if( hotelIterator !== -1){
  //       setUpdate(true);
  //     }
  //   }
  // }, [hotelIterator]);

  // useEffect(() => {
  //   if (hotelIterator !== -1) {
  //     hotelsService
  //       .getHotelPhotosById({ id: reservID[hotelIterator] })
  //       .then(({ data }) => {
  //         let newHotel;
  //         if (data.data.hotelImages[0] !== undefined) {
  //           newHotel = {
  //             ...hotel,
  //             pictUrl: data.data.hotelImages[0].baseUrl.replace(
  //               '{size}',
  //               data.data.hotelImages[0].sizes[0].suffix
  //             ),
  //           };
  //         }
  //         // console.log(newHotel);
  //         if (hotelIterator < reservID.length) {
  //           setHotelsList([...hotelsList, newHotel]);
  //           setHotelIterator(hotelIterator + 1);
  //         }
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //         Promise.resolve({});
  //       });
  //   }
  // }, [hotel]);

  // console.log(hotelIterator);
  // useState(() => {
  //   if (update) {
  //     setSwiper(
  //       new Swiper('.swiper-container', {
  //         grabCursor: true,
  //         loop: true,
  //         centeredSlides: true,
  //         slidesPerView: 4,
  //         parallax: true,
  //         effect: 'coverflow',
  //         coverflowEffect: {
  //           rotate: 45,
  //           stretch: 0,
  //           depth: 130,
  //           modifier: 1,
  //           slideShadows: true,
  //         },
  //         pagination: {
  //           el: '.swiper-pagination',
  //           clickable: true,
  //         },
  //         navigation: {
  //           nextEl: '.swiper-button-next',
  //           prevEl: '.swiper-button-prev',
  //         },
  //       })
  //     );
  //   }
  // }, [update]);
  // if (!update) {
  //   return (
  //     <>
  //       <h1 className="projects-swiper-title">Homes guests love</h1>
  //       <div></div>
  //       <div></div>
  //       <div></div>
  //       <div></div>
  //       <div></div>
  //       <div></div>
  //       <div></div>
  //       <div></div>
  //     </>
  //   );
  // } else {
  //   return (
  //     <>
  //       <h1 className="projects-swiper-title">Homes guests love</h1>
  //       <div className="swiper-container">
  //         <div className="swiper-wrapper">
  //           <div className="swiper-slide">
  //             <CardItem
  //               class="fixed__size"
  //               src="https://cf.bstatic.com/images/hotel/max1024x768/184/184961180.jpg"
  //               label="9.5"
  //               title="Monastero Santa Rosa Hotel"
  //               place="Québec, Canada"
  //               path=""
  //             />
  //           </div>
  //         </div>
  //         <div className="swiper-button-prev" />
  //         <div className="swiper-button-next" />
  //       </div>
  //     </>
  //   );
  // }
}

// class AdBlock extends Component {
//   constructor(props) {
//     super(props);
//     // #region ID
//     this.reservID = [
//       '124520',
//       '221843',
//       '126327',
//       '17619392',
//       '729948288',
//       '617591008',
//       '804154432',
//       '115823',
//       '673540',
//       '392263',
//     ];
//     //#endregion
//     this.hotel = {};
//     this.hotelsIterator = 0;
//     this.loading = false;
//     this.hotels = [];
//   }
//   componentDidMount() {
//     this.swiper = new Swiper('.swiper-container', {
//       grabCursor: true,
//       loop: true,
//       centeredSlides: true,
//       slidesPerView: 4,
//       parallax: true,
//       effect: 'coverflow',
//       coverflowEffect: {
//         rotate: 45,
//         stretch: 0,
//         depth: 130,
//         modifier: 1,
//         slideShadows: true,
//       },
//       pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//       },
//       navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },
//     });
//     const OnMount = () => {
//       useEffect(() => {
//         this.hotelsIterator += 1;
//       }, []);
//       useEffect(() => {
//         this.loading = true;
//         hotelsService
//           .getHotelDetails({
//             id: this.reservID[this.hotelIterator],
//           })
//           .then(({ data }) => {
//             const newHotel = {
//               name: data.data.data.body.propertyDescription.name,
//               address: data.data.data.body.propertyDescription.address.fullAddress,
//               guestRating: data.data.data.body.guestReviews.formattedRating,
//             };
//             this.hotel = newHotel;
//           })
//           .catch((error) => {
//             console.error(error);
//             // setIsSearchSuccesful(false);
//             Promise.resolve({});
//           });
//       }, [this.hotelsIterator]);

//       useEffect(() => {
//         hotelsService
//           .getHotelPhotosById({ id: this.reservID[this.hotelsIterator] })
//           .then(({ data }) => {
//             let newHotel;
//             if (data.data.hotelImages[0] !== undefined) {
//               newHotel = {
//                 ...this.hotel,
//                 pictUrl: data.data.hotelImages[0].baseUrl.replace(
//                   '{size}',
//                   data.data.hotelImages[0].sizes[0].suffix
//                 ),
//               };
//             }
//             this.hotels.push(newHotel);
//             this.hotelIterator += 1;
//           })
//           .catch((error) => {
//             console.error(error);
//             Promise.resolve({});
//           });
//       }, [this.hotel]);
//     };
//     OnMount();
//     // while (this.hotelsIterator < this.reservID.length) {
//     //   this.getHotelDetails(this.hotelsIterator);
//     //   this.getHotelPict(this.hotelsIterator);
//     // }
//   }

//   getHotelDetails(hotelsIterator) {
//     this.loading = true;
//     hotelsService
//       .getHotelDetails({
//         id: this.reservID[hotelsIterator],
//       })
//       .then(({ data }) => {
//         const newHotel = {
//           name: data.data.data.body.propertyDescription.name,
//           address: data.data.data.body.propertyDescription.address.fullAddress,
//           guestRating: data.data.data.body.guestReviews.brands.formattedRating,
//         };
//         this.hotel = newHotel;
//       })
//       .catch((error) => {
//         console.error(error);
//         Promise.resolve({});
//       });
//   }
//   getHotelPict(hotelsIterator) {
//     this.loading = true;
//     hotelsService
//       .getHotelPhotosById({ id: this.reservID[hotelsIterator] })
//       .then(({ data }) => {
//         let newHotel;
//         if (data.data.hotelImages[0] !== undefined) {
//           newHotel = {
//             ...this.hotel,
//             pictUrl: data.data.hotelImages[0].baseUrl.replace(
//               '{size}',
//               data.data.hotelImages[0].sizes[0].suffix
//             ),
//           };
//         }
//         this.hotels.push(newHotel);
//         console.log(this.hotels);
//         this.hotelsIterator += 1;
//       })
//       .catch((error) => {
//         console.error(error);
//         Promise.resolve({});
//       });
//   }

//   render() {
//     // const [isSearchSuccesful, setIsSearchSuccesful] = useState(true);
//     // const [hotelsList, setHotelsList] = useState([]);
//     // const [hotel, setHotel] = useState();
//     // // const [hotelsBaseInfo, setHotelsBaseInfo] = useState([]);
//     // const [counter, setCounter] = useState(-1);

//     // useEffect(() => {
//     //   setCounter(counter + 1);
//     // }, []);
//     // useEffect(() => {
//     //   setIsSearchSuccesful(true);
//     //   hotelsService
//     //     .getHotelDetails({
//     //       id: reservID[counter],
//     //     })
//     //     .then(({ data }) => {
//     //       const newHotel = {
//     //         name: data.data.data.body.propertyDescription.name,
//     //         address: data.data.data.body.propertyDescription.address.fullAddress,
//     //         guestRating: data.data.data.body.guestReviews.formattedRating,
//     //       };
//     //       setHotel(newHotel);
//     //     })
//     //     .catch((error) => {
//     //       console.error(error);
//     //       setIsSearchSuccesful(false);
//     //       Promise.resolve({});
//     //     });
//     // }, [counter]);

//     // useEffect(() => {
//     //   hotelsService
//     //     .getHotelPhotosById({ id: reservID[counter] })
//     //     .then(({ data }) => {
//     //       let newHotel;
//     //       if (data.data.hotelImages[0] !== undefined) {
//     //         newHotel = {
//     //           ...hotel,
//     //           pictUrl: data.data.hotelImages[0].baseUrl.replace(
//     //             '{size}',
//     //             data.data.hotelImages[0].sizes[0].suffix
//     //           ),
//     //         };
//     //       }
//     //       setHotelsList([...hotelsList, newHotel]);
//     //       setCounter(counter + 1);
//     //     })
//     //     .catch((error) => {
//     //       console.error(error);
//     //       Promise.resolve({});
//     //     });
//     // }, [hotel]);
//     return (
//       <>
//         <h1 className="projects-swiper-title">Homes guests love</h1>
//         <div className="swiper-container">
//           <div className="swiper-wrapper">
//             <div className="swiper-slide">
//               <CardItem
//                 class="fixed__size"
//                 src="https://cf.bstatic.com/images/hotel/max1024x768/184/184961180.jpg"
//                 label="9.5"
//                 title="Monastero Santa Rosa Hotel"
//                 place="Québec, Canada"
//                 path=""
//               />
//             </div>
//             <div className="swiper-slide">
//               <CardItem
//                 class="fixed__size"
//                 src="https://assets.simpleviewinc.com/simpleview/image/fetch/c_fill,h_351,q_75,w_599/http://res.cloudinary.com/simpleview/image/upload/v1450804984/clients/houston/Four-Seasons-pool_d6577d65-932e-4a9a-927c-ea7ac3340521.jpg"
//                 label="8.0"
//                 title="Hotel 71"
//                 place="Austin, Texas"
//                 path=""
//               />
//             </div>
//             <div className="swiper-slide">
//               <CardItem
//                 class="fixed__size"
//                 src="https://i.ytimg.com/vi/UlOhWmcndM8/maxresdefault.jpg"
//                 label="9.8"
//                 title="Grand Hotel Tremezzo"
//                 place="Udaipur, India"
//                 path=""
//               />
//             </div>
//             <div className="swiper-slide">
//               <CardItem
//                 class="fixed__size"
//                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn1QU6YkcomcyHdi7c6UTh5hEAle6tuvOxiw&usqp=CAU"
//                 label="8.8"
//                 title="Archer Hotel Austin"
//                 place="Via Provinciale Regina,  Lake Como"
//                 path=""
//               />
//             </div>
//             <div className="swiper-slide">
//               <CardItem
//                 class="fixed__size"
//                 src="https://dream-hostels.com/wp-content/uploads/2019/11/komnaty1-1180x480.jpg"
//                 label="9.1"
//                 title="Giraffe Manor"
//                 place="Nairobi, Kenya"
//                 path=""
//               />
//             </div>
//             <div className="swiper-slide">
//               <CardItem
//                 class="fixed__size"
//                 src="https://cf.bstatic.com/images/hotel/max1024x768/154/154474106.jpg"
//                 label="7.9"
//                 title="RAAS Jodhpur"
//                 place="Jodhpur, Rajasthan India"
//                 path=""
//               />
//             </div>
//           </div>
//           <div className="swiper-button-prev" />
//           <div className="swiper-button-next" />
//         </div>
//       </>
//     );
//   }
// }

export default AdBlock;
