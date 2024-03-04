import React, { useEffect, useState } from 'react';
import './Row.css';
import axios from '../../../axios'
import youTube from 'react-youtube'
import movieTrailer from 'movie-trailer'


const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl,isLargeRow}) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl,setTrailerUrl]=useState("")

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request.data.results);
      setMovies(request.data.results);
    }

    fetchData();
  }, [fetchUrl]);

  //  const opts ={
  //   height: "390",
  //   width: "100%",
  //   playerVars: {
  //     autoplay: 1,
  //   },
  //  };

    // const handleClick= (movie)=>{
    //         if(trailerUrl){
    //           setTrailerUrl("");
    //         }else{
    //           movieTrailer(movie?.title || movie?.name || movie.orginal_name)
    //           .then((url)=>{
    //             const urlParams = new URLSearchParams(new URL(url).search);
    //             setTrailerUrl(urlParams.get("v"));
    //           })
    //           .catch((error) => console.log(error))
    //         }
    // }

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            onClick={()=> handleClick(movie)}
            key={movie.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${movie.poster_path}`}
            alt={movie.title}
          />
        ))}
      </div>
      {/* <div style={{ padding: "40px"}}>
           {trailerUrl && <youTube videoId={trailer}  opts={opts}/>}
      </div> */}
    </div>
  );
}

export default Row;