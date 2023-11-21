import qs from 'qs'
import axios from 'axios'
import { userAuthStore } from '@/stores/auth'
import _ from 'lodash';
const axiosIns = createAxiosInstance()

const responseHandler = async (response) => {
    const { data, config } = response;

    const actions = {
        [CODES.ERROR]: () => handleError(data),
        [CODES.INVALID_TOKEN]: () => handleInvalidToken()
    }

    if (actions[data.code]) {
        actions[data.code]();
    }
    return response;
}

const errorHandler = (error) => {
    console.log(`error handler : ${error}`)
    if (!error.response) {
        // alert.error(error.message);
        // console.log(error.message)
        return Promise.reject(error);
    }
}

axiosIns.interceptors.request.use(request => requestHandler(request))
axiosIns.interceptors.response.use(responseHandler, errorHandler)

const CODES = {
    ERROR: 1,
    INVALID_TOKEN: 2
}

function createAxiosInstance(){
    axios.defaults.paramsSerializer = params => qs.stringify(params);
    return axios.create({
        baseURL: import.meta.env.VITE_BACKEND_API,
        headers: {
            Accept: 'application/json'
        }
    })
}

const requestHandler = async (request) => {
    // console.log(`request : ${request.baseURL}`)
    const store = userAuthStore()
    const authToken = store.getAuthToken
    if (!_.isEmpty(authToken)) {
        request.headers.Authorization = `Bearer ${authToken}`
    }
    return request
}

const handleError = (data) => {
    console.log(`response error : ${data.errMsg}`)
}

const handleInvalidToken = () => {
    console.log("invalid token")
}


export default axiosIns
