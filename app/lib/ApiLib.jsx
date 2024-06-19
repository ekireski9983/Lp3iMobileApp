import axios from "axios";

const ApiLib = axios.create({
    baseURL: 'https://ap-southeast-1.aws.data.mongodb-api.com/app/data-dysfecg/endpoint/data/v1',
    headers: {
        'api-key': 'iTLJlr0KADFxtiIIBe8KkghzwpRSzNXjktfgx2iZNQAu6hz1X83OvkbAFUfUMNuX'
    },
})

export default ApiLib;