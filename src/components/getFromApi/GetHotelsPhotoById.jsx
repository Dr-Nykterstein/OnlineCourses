import axios from './services/AxiosConfig'

////ARI url 
////id - of Hotel
const GetHotelsPhotoById = ({id}) => {
    return axios.get('https://hotels4.p.rapidapi.com/properties/get-hotel-photos',{
           params: {
                id: id
           }
    })
}

export default GetHotelsPhotoById