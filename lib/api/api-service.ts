import axios from 'axios';

export const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

instance.interceptors.request.use(async req => {
    req.headers['Authorization'] = `Bearer ${process.env.STRAPI_API_TOKEN}`;

    return req;
});

