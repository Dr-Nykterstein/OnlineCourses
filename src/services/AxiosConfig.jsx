import axios from 'axios'

export default axios.create ({
    headers: {
        'x-rapidapi-key': 'b78e5347fcmshefdb381f3041456p1d7d84jsn8ef68ad7b191',
        'x-rapidapi-host': 'hotels4.p.rapidapi.com',
        useQueryString: true
    }
})

