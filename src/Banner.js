import axios from "axios"
import { useState, useEffect } from "react"
import "./Banner.css"



const Banner = () => {
    const [movie, setMovies] = useState([]) 
    const base_url = "https://image.tmdb.org/t/p/original/"
    const apiCode = 'https://api.themoviedb.org/3/movie/popular?api_key=353ba7def2cf00ad2d2f2483627d066f&language=en-US&page=1'

        useEffect(() => {
     async function fetchData() {
        const answer = await axios.get(apiCode);

         setMovies(
                 answer.data.results[
                 Math.floor(
                 Math.random() * answer.data.results.length - 1
                )
                ]
         )
         return answer;
     }
     fetchData();
    }, [])

  function trunc(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "...." : str;
}

  return (
      <div className="banner" style={{
          backgroundSize: "cover",
          backgroundImage:`url(
            ${base_url}${movie?.backdrop_path}
          )`, backgroundRepeat: "no-repeat"
    }}>
          <div className="banner__contents">
              <h1 className="banner_title">
                  {movie?.name || movie?.title || movie?.original_name}
              </h1>
              <div className="Banner_buttons">
                   <button className="banner_button">Play</button>
                  <button className="banner_button">My List</button>
                  
              </div>
        <h1 className="banner_description">{trunc(movie?.overview, 150)}</h1>
        
      </div>   
      <div className="extra">

      </div>
    </div>
  )
}

export default Banner