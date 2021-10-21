
const API_KEY = '8f713e9edf349e96e4991fa46c65bec3';

const requests = {

    
    fetchNetflixOriginals :`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTrending : `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated : `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies : `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedy : `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies : `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomance :`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDoc : `/discover/movie?api_key=${API_KEY}&with_genres=99`,

}
export default requests;