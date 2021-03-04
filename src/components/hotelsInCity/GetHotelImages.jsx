import GetHotelsPhotoById from '../../services/GetHotelsPhotoById'

const GetHotelImg = ({id}) => {

    console.log(id)
    GetHotelsPhotoById({id: id})
    .then(res => {
        const pictInfo = []
        console.log(res.data.hotelImages)
        res.data.hotelImages.map(info => pictInfo.push({baseUrl: info.baseUrl, sizes: info.sizes}))
        const srcOnPict =[]
        pictInfo.map(info => 
            info.sizes.map(size => srcOnPict.push(info.baseUrl.replace('{size}',size.suffix))))
        console.log(srcOnPict)
        return srcOnPict;
    })
    .catch(error => {
        console.log(error)  
    })
}

export default GetHotelImg;
