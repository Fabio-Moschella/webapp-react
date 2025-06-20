import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import RatingStars from "./RatingStars";

function ReviewsList() {
  const [reviews, setReviews] = useState();
  const { id: reviewId } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:3000/movie/${reviewId}`).then((res) => {
      const reviewsResponse = res.data.movie.reviews;
      console.log(reviewsResponse);
      setReviews(reviewsResponse);
    });
  }, [reviewId]);
  return (
    <>
      <h1 className="mt-5 mb-3 text-white">REVIEWS</h1>
      {reviews && reviews.length > 0 ? (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <strong className="fs-3 text-danger">{review.name}</strong>
              {""} <RatingStars vote={review.vote} />{" "}
              <div className="text-white">{review.text}</div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="fst-italic text-white">Nessuna recensione disponibile.</p>
      )}
    </>
  );
}
export default ReviewsList;
