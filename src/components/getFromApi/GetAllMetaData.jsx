import axios from '../../services/AxiosConfig'

const GetAllMetaData = () => {
    return axios.get('https://hotels4.p.rapidapi.com/get-meta-data') 
}
export default GetAllMetaData
