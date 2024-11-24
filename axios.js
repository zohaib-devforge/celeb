import axios from 'axios';
import * as dotenv from 'dotenv';
dotenv.config();
const bubbleApiUrl = process.env.BUBBLE_API_URL;
const bubbleApiKey = process.env.BUBBLE_API_KEY;

const axiosInstance = axios.create({
    baseURL: bubbleApiUrl,
    headers: {
        'Content-Type': 'application/json',
    }
});
axiosInstance.interceptors.request.use(
    (config) => {
        const token = bubbleApiKey;
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {

        console.error('API error:', error.response || error.message);
        return Promise.reject(error);
    }
);

export default axiosInstance;
