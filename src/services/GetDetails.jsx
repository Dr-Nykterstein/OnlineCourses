import axios from './AxiosConfig'

// ////id - id of Hotel 
// ////checkOut - date of leaving from the Hotel Ex: 01-01-2021
// ////checkIn - date of entring in the Hotel Ex: 01-01-2021
// ////adults1_8 - number adult you want set in room(1_8)
// ////children1_8 - number children you want set in room(1_8) and their age separate by "," Ex: 5,12

const GetDetails = ({
    id = null,
    locale = null,
    checkOut = null, 
    checkIn = null,
    adults1 = null,
    adults2 = null,
    adults3 = null,
    adults4 = null,
    adults5 = null,
    adults6 = null,
    adults7 = null,
    children1 = null,
    children2 = null,
    children3 = null,
    children4 = null,
    children5 = null,
    children6 = null,
    children7 = null,
    }) =>{
    return axios.get('/properties/get-details', {
        params: {
            id: id,

            locale: locale,

            checkOut: checkOut,
            checkIn: checkIn,

            adults1: adults1,
            adults2: adults2,
            adults3: adults3,
            adults4: adults4,
            adults5: adults5,
            adults6: adults6,
            adults7: adults7,

            children1: children1,
            children2: children2,
            children3: children3,
            children4: children4,
            children5: children5,
            children6: children6,
            children7: children7,
        }
    })
}
export default GetDetails