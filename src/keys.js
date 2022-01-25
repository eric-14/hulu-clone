export const API_KEY = "04d9558eb3c3de3a390e0b93550c39f5"

export default{
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/movie/top_rated?api_key=${API_KEY}&with_genres=35`,
    
    fetchHorrorMovies:`/movie/top_rated?api_key=${API_KEY}&with_genres=27`,
    
    fetchRomanceMovies:`/movie/top_rated?api_key=${API_KEY}&with_genres=10749`,

    fetchMystery:`/movie/top_rated?api_key=${API_KEY}&with_genres=9648`,
    
    fetchSciFi:`/movie/top_rated?api_key=${API_KEY}&with_genres=878`,

    fetchWestern:`/movie/top_rated?api_key=${API_KEY}&with_genres=37`,
    
    fetchAnimation:`/movie/top_rated?api_key=${API_KEY}&with_genres=16`,
   
    fetchTv:`/movie/top_rated?api_key=${API_KEY}&with_genres=10770`,
        
}