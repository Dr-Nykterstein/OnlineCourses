import axios from 'axios'
import serviceAxios from './hotels4Service'

const hotelsService = {
    searchHotelByLocation(params){
        return axios.get('/locations/search',{
               params: {...params}
        }).then(({data})=>({
            hotels: data
        })).catch(error=>{
            Promise.reject(error);
        })
    }
}

export default hotelsService;