import axios from './AxiosConfig';

/// /ARI url
/// /id - of Hotel
const GetHotelsPhotoById = ({ id }) =>
  axios.get('https://hotels4.p.rapidapi.com/properties/get-hotel-photos', {
    params: {
      id,
    },
  });

export default GetHotelsPhotoById;
