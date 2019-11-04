import axios from 'axios';

const KEY = 'AIzaSyBU2fQM6nFLYxs6P_wnMYTfOjA5ReudrVo';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})
