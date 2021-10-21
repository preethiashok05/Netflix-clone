import React, { useState, useEffect } from "react";
import axios from "../axios";
import '../styles/Row.css';


const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchURL, isLarge }) => {
  const [movies, setMovies] = useState([]);
  //const [trailerUrl , setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);

  // const opts = {
  //   height : "390",
  //   width : "100" ,
  //   playerVars : {
  //     autoplay:1,
  //   }
  // };

  // const handleClick = (movie) => {
  //   if(trailerUrl) {
  //     setTrailerUrl('');
  //   }else {
  //     movieTrailer(movie?.name || "")
  //       .then((url) => {
  //         const urlParams = new URLSearchParams( new URL(url).search);
  //         setTrailerUrl( urlParams.get('v'));
  //       })
  //       .catch( (error) => console.log(error));
  //   }
  // }

  return (
    <div className ="row">
      <h2>{title}</h2>
      <div className="poster_row">

        {movies.map((movie) => (
          <img
            key={movie.id}
            className= {`"poster" && ${isLarge ? "posterlarge" : "poster"}`}
           
            src={`${base_url}${
              isLarge ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}   
      </div>

   
    </div>
  );
};

export default Row;
