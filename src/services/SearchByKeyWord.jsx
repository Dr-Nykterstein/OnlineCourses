import axios from './AxiosConfig'

////query - find by city/region/counry 
const SearchByKeyWord = ({query = null, loc = null}) =>{
    return axios.get('/locations/search',{
           params: {
                query: query,
                loc: loc
           }
    })
}
export default SearchByKeyWord
