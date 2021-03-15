import axios from 'axios';

const serviceAxios = axios.create({
  baseURL: 'https://hotels4.p.rapidapi.com',
  headers: {
    'x-rapidapi-key': 'd05bfc1d6bmsh413662f6bfea915p1fa850jsna5713044b31a',
    'x-rapidapi-host': 'hotels4.p.rapidapi.com',
    useQueryString: true,
  },
});

serviceAxios.interceptors.request.use((config) => ({
  ...config,
  params: {
    ...config.params,
  },
}));

serviceAxios.interceptors.response.use(
  (res) => res,
  (error) => {
    throw error;
  }
);

export default serviceAxios;