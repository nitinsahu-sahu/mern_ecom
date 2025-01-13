import axios from 'axios'

export const axiosi = axios.create(
    {
        withCredentials: true,
        timeout: 1000,
        headers: { 'X-Custom-Header': 'foobar' },
        baseURL: "http://localhost:8000"
    }
)