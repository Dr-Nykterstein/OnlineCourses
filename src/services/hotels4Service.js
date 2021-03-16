import axios from 'axios';

const serviceAxios = axios.create({
    baseURL: 'https://hotels4.p.rapidapi.com',
    headers: {
        'x-rapidapi-key': '7dd6ad6de8msh730ea6dd59678adp1d3d89jsn3a114edf1579',
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