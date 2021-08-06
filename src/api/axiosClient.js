import axios from 'axios';

export const axiosClient = axios.create({
    baseURL: 'http://localhost:4000/api',
    headers: {
      'Content-type': 'multipart/form-data'
    },
    // headers: {
    //   'Content-Type': 'application/json',
    // }
})