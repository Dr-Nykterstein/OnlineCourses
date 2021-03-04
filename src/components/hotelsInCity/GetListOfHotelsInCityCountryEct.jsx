import SearchByKeyWord from '../../services/SearchByKeyWord'

const GetListOfHotelInSomeCity = ({query, loc}) => {
    const hotelsInfo = [];
    SearchByKeyWord({query: query})
    .then(res => {
        res.data.suggestions[1].entities.map(hotelInfo => hotelsInfo.push(hotelInfo))
    })
    .catch(error => {
        console.log(error)  
    })
    return  hotelsInfo;
}

export default GetListOfHotelInSomeCity;