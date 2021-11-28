import axios from 'axios';

const KEY = 'AIzaSyD3KnX2lBre8zjLRlzcT6B7cmB-aRz9EXs'

export default axios.create ( {
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video'

    }
});