import axios from "axios"

const apiKey = process.env.REACT_APP_TMDB_API_KEY;
const base = "https://api.themoviedb.org/3";

export const search = (q) = > {
 return axios.get(`${base}/search/movie`,{
   params:{
     key: apiKey,
	 query: q,
   },
 });
} ;

