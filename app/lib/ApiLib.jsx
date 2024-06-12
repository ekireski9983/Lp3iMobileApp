import axios from "axios";

const ApiLib = axios.create({
    baseURL: 'https://ap-southeast-1.aws.data.mongodb-api.com/app/data-dysfecg/endpoint/data/v1',
    headers: {
        'api-key': 'sAOA2rGxJMHNdjgxFPnJAoUWFla30qkwLdDguSl0Hh225KGjs7CYkBUbQcCIVTCR'
    },
})

export default ApiLib;