import axios from './AxiosConfig';

////id - id of Hotel
////checkOut - date of leaving from the Hotel Ex: 01-01-2021
////checkIn - date of entring in the Hotel Ex: 01-01-2021
////adults1_8 - number adult you want set in room(1_8)
////children1_8 - number children you want set in room(1_8) and their age separate by "," Ex: 5,12

const GetDetails = ({
  id,
  locale,
  checkOut,
  checkIn,
  adults1,
  adults2,
  adults3,
  adults4,
  adults5,
  adults6,
  adults7,
  children1,
  children2,
  children3,
  children4,
  children5,
  children6,
  children7,
  children8,
}) => {
  if (id === null) {
    throw Error('You must passed id');
  }
  return axios.get('https://hotels4.p.rapidapi.com/properties/get-details', {
    params: {
      id,

      locale,

      checkOut,
      checkIn,

      adults1,
      adults2,
      adults3,
      adults4,
      adults5,
      adults6,
      adults7,

      children1,
      children2,
      children3,
      children4,
      children5,
      children6,
      children7,
      children8,
    },
  });
};
export default GetDetails;
