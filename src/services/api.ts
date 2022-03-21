import axios from 'axios';

const api = axios.create({
    baseURL: 'https://amazoncopygraficas.backendtropa.com.br/',
    // baseURL: 'http://192.168.15.9:3334',
})

export default api

// var baseUrl

// if(process.env.NODE_ENV === 'development') {
//   baseUrl = 'http://192.168.15.8:3000';
// } else if (process.env.NODE_ENV === 'test') {
//   baseUrl = 'http://192.168.15.8:3000';
// } else {
//   baseUrl = 'http://192.168.15.8:3000'
// }

// const TOKEN = window.localStorage.getItem('@Acopy:token')

// const api = axios.create({
//   baseURL: baseUrl,
//   headers: {
//     'Authorization': 'Bearer '+TOKEN
//   }
// })

// export { api, TOKEN };