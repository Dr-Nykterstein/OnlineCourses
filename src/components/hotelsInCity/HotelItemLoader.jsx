import React from 'react'

import HotelInCityItem from './HotelInCityItem'

// function OnLoadingHotelInCityData(Component) {
//     return function LoadingHotelData(loader) {
//         if(loader.hotels !== undefined)
//             loader.hotels.forEach(item => {
//                 if (!item.loading) 
//                 {
//                     return <HotelInCityItem hotels = {item.hotels} />
//                 }
//             })
//             else return (
//                 <div>
//                     <h1>Loading...</h1>
//                 </div>
//             )
//     }
// }
// export default OnLoadingHotelInCityData

function LoadingHotelData({loading, hotels}) {
    if (!loading && hotels.length != 0) 
    {
        console.log(hotels)
        return <HotelInCityItem hotels = {hotels} />
    }
    else return (
        <div>
            <h1>Loading...</h1>
        </div>
    )
}

export default LoadingHotelData