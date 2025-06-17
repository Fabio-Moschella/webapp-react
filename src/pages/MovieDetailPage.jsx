import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function MovieDetailPage() {
  const { id: movieId } = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    axios.get(`http://localhost:3000/post/${movieId}`).then((res) => {
      setMovie(res.data.results);
    });
  }, [movieId]);

  return <div className="container my-5"></div>;
}

export default MovieDetailPage;
