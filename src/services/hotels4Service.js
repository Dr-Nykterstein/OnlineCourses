import axios from 'axios';

const serviceAxios = axios.create({
    baseURL: 'https://hotels4.p.rapidapi.com',
    headers: {
        'x-rapidapi-key': "bc942d6fc3mshf18fe95ccee55ebp186b09jsnc4e7730b72d7",
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