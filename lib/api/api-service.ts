import axios from 'axios';

export const instance = axios.create();

instance.interceptors.request.use(async req => {
    req.headers['Authorization'] = `Bearer ${process.env.STRAPI_API_TOKEN}`;
    return req;
});

