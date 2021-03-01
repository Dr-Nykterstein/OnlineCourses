import axios from './AxiosConfig'

////id - of object 
//// loc -location 
const GetReviewsListOfHotel = (args) =>{
    return axios.get('https://hotels4.p.rapidapi.com/reviews/list',{
           params: {
                id: args
           }
    })
}
export default GetReviewsListOfHotel