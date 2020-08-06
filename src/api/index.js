import axios from 'axios'
import store from '../reducer/store';

const todoApi = axios.create({
    baseURL: `https://5e9ec500fb467500166c4658.mockapi.io/todos`
});

todoApi.interceptors.request.use(req => {
    store.dispatch({type: "LOADING_TOGGLE", payload: {loading: true} });
    return req;
}, error => error
);

todoApi.interceptors.response.use(req => {
    console.log("1")
    store.dispatch({ type: "LOADING_TOGGLE", payload: { loading: false } });
    console.log(req)
    return req;
},error => error
);

export default todoApi;