import {useContext} from "react";
import {FavouritesContext} from "../context/FavouritesContext";
import MovieCard from "../components/MovieCard";

const Favourites = () = >{
 const {favourites,removeFavourites} = useContext(FavouritesContext);
 return(
  <div>
	 <h1>Favourites</h1>
	 {favourites.map((movie)=>(
       <MovieCard
         key={movie.id}
		 movie = {movie}
		 onRemove={()=>removeFavourites(movie.id)}
		 />
	 ))}
  </div>
 )
}

