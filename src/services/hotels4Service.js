import axios from "axios";

const serviceAxios = axios.create({
    baseURL: 'https://hotels4.p.rapidapi.com',
    headers: {
        'x-rapidapi-key': "a1b68bbba1msh54037660825604ap1d83c7jsn239fb708e5e9",
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
