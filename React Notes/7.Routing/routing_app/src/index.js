import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.post['Content-Type'] = 'application.json';
axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';
//as index is the first file this interceptor is global
//and all requests will be first go throu interceptor and then given back
var myInterceptor = axios.interceptors.request.use( requestConfig =>
    {
        console.log(requestConfig);
        //EDIT REQUEST to add headers for offerization
        //extremly important
        return requestConfig;
    }
    
, error=> {
    //console.log(error,"ERROR");
    return Promise.reject(error);
});

//axios.interceptors.request.eject(myInterceptor);

//interceptors handle ntwk errors like prbm occured when req not sent
//response errors shall occur when url is wrong , etc
axios.interceptors.response.use( requestConfig =>
    {
        return requestConfig;
    }
, error=> {
    return Promise.reject(error);
});
ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
