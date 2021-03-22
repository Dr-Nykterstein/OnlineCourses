import axios from "axios";

const serviceAxios = axios.create({
    baseURL: 'https://hotels4.p.rapidapi.com',
    headers: {
        'x-rapidapi-key': "7ce841f1dfmsh9593be8de3f8caap1f43acjsnc6f01e21c2ba",
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
