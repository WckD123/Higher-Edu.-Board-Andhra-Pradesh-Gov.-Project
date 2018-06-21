import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://gettin-4d3a5.firebaseio.com/'

}
);

export default instance;