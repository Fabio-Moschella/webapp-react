import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function FormReviews() {
  const [formData, setFormData] = useState({
    name: "",
    vote: "",
    text: "",
  });
  const { id: movieId } = useParams();

  const HandleOnSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:3000/movie/${movieId}/reviews`, formData)
      .then((res) => {
        console.log("sei un grande developer");
        setFormData({ name: "", vote: "", text: "" });
      });
  };
  const HandleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((oldData) => ({
      ...oldData,
      [name]: value,
    }));
  };

  return (
    <>
      <form onSubmit={HandleOnSubmit}>
        <div className="mb-3">
          <label className="form-label text-danger">Il tuo nome</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={HandleOnChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label text-danger">Voto (1-5)</label>
          <input
            type="number"
            name="vote"
            min="1"
            max="5"
            className="form-control"
            value={formData.vote}
            onChange={HandleOnChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label text-danger">
            Scrivi una recensione
          </label>
          <textarea
            name="text"
            className="form-control"
            value={formData.text}
            onChange={HandleOnChange}
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Add review
        </button>
      </form>
    </>
  );
}

export default FormReviews;
