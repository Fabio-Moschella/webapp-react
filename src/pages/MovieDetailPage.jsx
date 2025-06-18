import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function MovieDetailPage() {
  const { id: movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/movie/${movieId}`)
      .then((res) => {
        setMovie(res.data.movie);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Errore durante il recupero del film:", err);
        setError("Film non trovato.");
        setLoading(false);
      });
  }, [movieId]);

  if (loading) return <p>Caricamento in corso...</p>;
  if (error) return <p>{error}</p>;
  if (!post) return <p>Post non trovato.</p>;

  return (
    <div className="container my-5">
      <h1 className="mb-4">{movie.title}</h1>
      <img src={movie.image} alt={movie.title} className="img-fluid mb-4" />
      <p>
        <strong>Director:</strong> {movie.director}
      </p>
      <p>
        <strong>Genre:</strong> {movie.genre}
      </p>
      <p>
        <strong>Release year:</strong> {movie.release_year}
      </p>
      <p>
        <strong>Description:</strong> {movie.abstract}
      </p>
    </div>
  );
}

export default MovieDetailPage;
