import axios from './AxiosConfig'

const GetAllMetaData = () => {
    return axios.get('https://hotels4.p.rapidapi.com/get-meta-data') 
}
export default GetAllMetaData
