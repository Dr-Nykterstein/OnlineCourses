import axios from './services/AxiosConfig'

////id - of object 
const GetReviewsListOfHotel = ({id}) =>{
    return axios.get('https://hotels4.p.rapidapi.com/reviews/list',{
           params: {
                id: args
           }
    })
}
export default GetReviewsListOfHotel