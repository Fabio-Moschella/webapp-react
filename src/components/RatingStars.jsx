function RatingStars({ vote }) {
  const totalStars = 5;

  return (
    <div className="stars">
      {[...Array(totalStars)].map((_, index) => (
        <span key={index}>{index < vote ? "★" : "☆"}</span>
      ))}
    </div>
  );
}
export default RatingStars;
