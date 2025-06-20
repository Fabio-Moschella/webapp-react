import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReviewsList from "../components/ReviewsList";
import FormReviews from "../components/FormReviews";

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
  if (!movie) return <p>Film non trovato.</p>;

  return (
    <div className="container my-5">
      <h1 className="mb-4 text-white">{movie.title}</h1>
      <img
        src={movie.image}
        alt={movie.title}
        className="img-fluid mb-4 w-50"
      />
      <p className="text-white">
        <strong className="text-danger">Director:</strong> {movie.director}
      </p>
      <p className="text-white">
        <strong className="text-danger">Genre:</strong> {movie.genre}
      </p>
      <p className="text-white">
        <strong className="text-danger">Release year:</strong>{" "}
        {movie.release_year}
      </p>
      <p className="text-white">
        <strong className="text-danger">Description:</strong> {movie.abstract}
      </p>
      <ReviewsList />
      <FormReviews />
    </div>
  );
}

export default MovieDetailPage;
