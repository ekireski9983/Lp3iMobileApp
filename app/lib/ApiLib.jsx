import axios from "axios";

const ApiLib = axios.create({
    baseURL: '',
    headers: {
        'api-key': ''
    },
})

export default ApiLib;