import axios from 'axios'

export default axios.create ({
    baseURL: 'https://hotels4.p.rapidapi.com',
    headers: {
        'x-rapidapi-key': '1e84a9a723msh03e2c1f4648b9c7p1f4c9ejsn180bb794c664',
        'x-rapidapi-host': 'hotels4.p.rapidapi.com',
        useQueryString: true
    }
})

