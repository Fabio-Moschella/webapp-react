import { NavLink } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <>
      <div className="col-sm-12 col-md-6 col-lg-4 my-3 ">
        <div className="card  h-100  bg-dark g-2 mt-3">
          <img className="card-img " src={movie.image} alt="" />
          <div className="card-body">
            <div className="card-title mb-3">
              <h1 className="fs-2 fw-bold text-white">{movie.title}</h1>
            </div>

            <div className="card-text  text-white">{movie.director}</div>
            <div className="card-text  text-white">{movie.genre}</div>
            <div className="card-text  text-white">{movie.release_year}</div>
            <div className="card-text  text-white">{movie.abstract}</div>
          </div>

          <NavLink
            to={`/MoviesDetailPage/${movie.id}`}
            className="btn btn-primary w-30 my-3 "
          >
            Vedi Dettagli
          </NavLink>
        </div>
      </div>
    </>
  );
}
export default MovieCard;
