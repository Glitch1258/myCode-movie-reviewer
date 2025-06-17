import{useState} from "react";
import{searchd} from "../services/tmdb";

const searchBar = ({onSearch})=>{
 const[query,setQuery] = useState("");
 const search = async()=>{
  const response = await searchd(query);
  onSearch(response.data.results);
 };
 return(
  <div>
	 <input
	   type = "text"
	   value= {query}
	   onChange={(e)=>setQuery(e.target.value)}
	 />
	 <button onClick={search}>Search</button>
	 </div>
 )
}
