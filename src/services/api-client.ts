import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '6bd839beaeaa48bf966680bd77eefbd1'
    }
});