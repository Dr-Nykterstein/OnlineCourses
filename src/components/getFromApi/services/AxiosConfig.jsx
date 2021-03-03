import axios from 'axios'

export default axios.create ({
    headers: {
        'x-rapidapi-key': '06680bfbb0msh40b9b35c3e0b9ebp1c368fjsn857cece02668',
        'x-rapidapi-host': 'hotels4.p.rapidapi.com',
        useQueryString: true
    }
})

