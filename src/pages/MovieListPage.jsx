import axios from "axios";
import { useEffect, useState } from "react";

import MovieCard from "../components/MovieCard";

function MovieListPage() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/movie").then((res) => {
      const response = res.data.movies;
      console.log(response);
      setMovies(response);
    });
  }, []);
  return (
    <>
      <div className="row">
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </>
  );
}

export default MovieListPage;
