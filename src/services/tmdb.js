import axios from "axios"

const apiKey = process.env.REACT_APP_TMDB_API_KEY;
const base = "https://api.themoviedb.org/3";

export const movieSearch = (q) = > {
 return axios.get(`${base}/search/movie`,{
   params:{
     key: apiKey,
	 query: q,
   },
 });
}

export const getDetails = (id) =>{
 return axios.get(`${base}/movie/${id}`,{
  params:{
    key:apiKey,
	categories:"credits,videos",
  },
 })
}

