import axios from 'axios'
import store from '../reducer/store';

const todoApi = axios.create({
    baseURL: `http://localhost:8080/todos`
});

todoApi.interceptors.request.use(req => {
    store.dispatch({type: "LOADING_TOGGLE", payload: {loading: true} });
    return req;
}, error => error
);

todoApi.interceptors.response.use(req => {
    store.dispatch({ type: "LOADING_TOGGLE", payload: { loading: false } });
    console.log(req)
    return req;
},error => error
);

export default todoApi;