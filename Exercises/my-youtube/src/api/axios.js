import axios from 'axios';
const KEY='AIzaSyDKrwXjzteN1vCf8yvr9ThMAST9szRX3LQ'

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3/',
    params:{
        part:'snippet',
        maxResults:20,
        key:KEY


    }
})