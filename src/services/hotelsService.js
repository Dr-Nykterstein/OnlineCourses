import axios from './hotels4Service'

const hotelsService = {
    searchHotelByLocation(params){
        return axios.get('/locations/search',{
               params: {...params}
        }).then((data)=>({
            data: data
        })).catch(error=>{
            Promise.reject(error);
        })
    },
    getHotelDetails(params){
        return axios.get('/properties/get-details', {
            params: {...params}
        }).then((data)=>({
            data: data
        })).catch(error=>{
            Promise.reject(error);
        })
    },
    getHotelPhotosById(params){
        return axios.get('/properties/get-hotel-photos', {
            params: {...params}
        }).then((data)=>({
            data: data
        })).catch(error=>{
            Promise.reject(error);
        })
    },
    getReviewsListOfHotel(params){
        return axios.get('/reviews/list',{
            params: {...params}
        }).then((data)=>({
            data: data
        })).catch(error=>{
            Promise.reject(error);
        })
    },
    getAllMetaData(params){
        return axios.get('/get-meta-data',{
            params: {...params}
        }).then((data)=>({
            data: data
        })).catch(error=>{
            Promise.reject(error);
        })
    }

}

export default hotelsService;