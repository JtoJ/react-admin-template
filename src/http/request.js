import axios from 'axios';

const httpRequest = axios.create({
    baseURL:'',
    timeout:1000*10
});

httpRequest.interceptors.request.use(config => {
    console.log('in axios req interceptor');
    console.log('req url is ' + config.url);
    return config;
},
err => {
    console.error(err);
})

httpRequest.interceptors.response.use(response => {
  if(response.data.code === 'ok') {
      return response.data;
  } else {
    
  }
},
err => {
    console.error(err);
})

export default httpRequest