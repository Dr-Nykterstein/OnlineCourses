import { useEffect, useState } from 'react'

import GetHotelsPhotoById from '../services/GetHotelsPhotoById'
import SearchByKeyWord from '../services/SearchByKeyWord'
import GetDetails from '../services/GetDetails'






// const GetListHotelsInCity = ({ name }) => {
//   const [baseInfo, setBaseInfo] = useState([]);
//   useEffect(() => {
//     const runEffect = async ()=>{
//         await SearchByKeyWord({ query: name })
//         .then(res => {
//           setBaseInfo(res.data.suggestions[1].entities);
//         })
//         .catch(error => {
//           console.log(error)
//         })
//     }
//     runEffect();
//   }, []);
//   let temp = 210;
//   let count = 1;
//   const desc = [];
//   const pict = [];
//   if(baseInfo.length != 0){
//     baseInfo.forEach(el => {
//       if(el.destinationId !== undefined){
//         const promiseDetail = new Promise((resolve,reject) =>{setTimeout(()=>{
//           const res = GetDetails({ id: el.destinationId })
//           .then(res => {
//           return {overview: res.data.data.body.overview.overviewSections[0].content.join(), 
//                             address: res.data.data.body.propertyDescription.address.fullAddress, 
//                             starRating: res.data.data.body.propertyDescription.starRating,
//                             guestRating: res.data.data.body.guestReviews.formattedRating};
//           })
//           .catch(error => {
//             console.log(error);
//           });
//           resolve(res);
//         },temp*count);});
//         desc.push(promiseDetail);
//         const promisePicture = new Promise((resolve,reject)=>{setTimeout(()=>{
//           const res = GetHotelsPhotoById({ id: el.destinationId })
//           .then(res=>{
//             return { pictUrl: res.data.hotelImages[0].baseUrl.replace('{size}',res.data.hotelImages[0].sizes[0].suffix)};
//           })
//           .catch(error => {
//             console.log(error);
//           });
//           resolve(res);
//         },temp*count)
//         })
//         pict.push(promisePicture);

//         count +=2
//       }
//     })
//   }
//   // return Promise.all({baseInfo: baseInfo, description: desc, picture: pict});
//   return [baseInfo,desc,pict];
// }

// const GetListHotelsInCity = ({ name, destinationId, count }) => {
  // const [baseInfo, setBaseInfo] = useState([]);
  // const [detaiInfo, setDetailInfo] = useState([]);
  // const [photosInfo, setPhotosInfo] = useState([]);
  // useEffect(() => {
  //   const runEffect = async ()=>{
  //       await SearchByKeyWord({ query: name })
  //       .then(res => {
  //         setBaseInfo(res.data.suggestions[1].entities[count]);
  //       })
  //       .catch(error => {
  //         console.log(error)
  //       })
  //   }
  //   runEffect();
  // }, []);

  // useEffect(() => {
  //   const runEffect = async ()=>{
  //     GetHotelsPhotoById({ id: el.destinationId })
  //         .then(res=>{
  //           pict.push(res.data.hotelImages[0].baseUrl.replace('{size}',res.data.hotelImages[0].sizes[0].suffix));
  //         });
  //     .catch(error => {
  //       console.log(error);
  //     });
  //   }
  //   runEffect();
  // }, []);
  // useEffect(() => {
  //   const runEffect = async ()=>{
  //     await GetDetails({ id: destinationId })
  //     .then(res => {
  //     setDetailInfo({overview: res.data.data.body.overview.overviewSections[0].content.join(), 
  //               address: res.data.data.body.propertyDescription.address.fullAddress, 
  //               starRating: res.data.data.body.propertyDescription.starRating,
  //               guestRating: res.data.data.body.guestReviews.formattedRating});
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  //   }
  //   runEffect();
  // }, []);

  // let temp = 210;
  // let count = 1;
  // const desc = [];
  // const pict = [];
  // let timer = 0;
  // if(baseInfo.length != 0){
  //   baseInfo.forEach(el => {
  //     if(el.destinationId !== undefined){
  //       timer =temp*count;
  //       setTimeout(()=>{
  //         GetDetails({ id: el.destinationId })
  //         .then(res => {
  //         desc.push({overview: res.data.data.body.overview.overviewSections[0].content.join(), 
  //                           address: res.data.data.body.propertyDescription.address.fullAddress, 
  //                           starRating: res.data.data.body.propertyDescription.starRating,
  //                           guestRating: res.data.data.body.guestReviews.formattedRating});
  //         })
  //         .catch(error => {
  //           console.log(error);
  //         });
  //       },timer);
  //       count+=1;
  //       timer += temp*count;  
  //       setTimeout(()=>{
  //         GetHotelsPhotoById({ id: el.destinationId })
  //         .then(res=>{
  //           pict.push(res.data.hotelImages[0].baseUrl.replace('{size}',res.data.hotelImages[0].sizes[0].suffix));
  //         });
  //       },temp*count)  
  //       count +=1
  //     }
  //   })
  // }
  // return [Promise.all([baseInfo,desc,pict]),timer];
// }


class HotelModel {
  constructor(name,latitude,longitude,location,description,starRating,rating,picture) {
    this.name = name;
    this.latitude = latitude;
    this.longitude = longitude;
    this.location = location;
    this.description = description;
    this.starRating = starRating;
    this.rating = rating;
    this.picture = picture;
  }
}

// export default GetListHotelsInCity;