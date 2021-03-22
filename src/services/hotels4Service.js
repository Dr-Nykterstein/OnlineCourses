import axios from "axios";

const serviceAxios = axios.create({
    baseURL: 'https://hotels4.p.rapidapi.com',
    headers: {
        'x-rapidapi-key': "d49b997235mshadcbf7bec2303d9p1821dejsn9792d1d73b46",
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
