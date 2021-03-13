import axios from './AxiosConfig'

const GetAllMetaData = () => {
    return axios.get('/get-meta-data') 
}
export default GetAllMetaData