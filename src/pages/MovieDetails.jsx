import {useEffect,useState} from "react";
import {useParams} from "react-router-dom";
import {getMovieDetails} from "../services/tmdb";

const MovieDetails = () =>{
 const {id} = useParams();
 const [movie,setMovie] = useState(null);
 
 useEffect(()=>{
  getMovieDetails(id).then((response)=>setMovie(response.data));
 },[id]);
 
 if(!movie){
   return (<div>Loading...</div>);
 }

 return(
 <div>
   <h1>{movie.title}</h1>
   <p>Rating: {movie.vote_average}</p>
   <h2>Cast</h2>
 </div>
 )
}

