import axios from './AxiosConfig'

////ARI url 
////id - of Hotel
const GetHotelsPhotoById = ({id}) => {
    return axios.get('/properties/get-hotel-photos',{
           params: {
                id: id
           }
    })
}

export default GetHotelsPhotoById