import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '228864d8490c0abd15c4d5bfde6f136c';
const token =
   'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjg4NjRkODQ5MGMwYWJkMTVjNGQ1YmZkZTZmMTM2YyIsInN1YiI6IjVlMWEyYTgzYzA5ZTk5MDAxNGNiOWRjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LXub4ssrnhNboBJHaoM8eSVSQvOWWS6gmO0U-I8RTEI';
export default axios.create({
   baseURL: BASE_URL,
   headers: { Authorization: 'Bearer ' + token },
});
