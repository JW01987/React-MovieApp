import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./card.css";

function Detail() {
  let [loading, setLoading] = useState(true);
  let [movie, setMovies] = useState([]);
  const { id } = useParams();
  const getMovies = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const res = await response.json();
    setMovies(res.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className="container">
      {loading ? (
        <h4>Loading...</h4>
      ) : (
        <MovieDetail
          title={movie.title}
          coverImg={movie.medium_cover_image}
          backImg={movie.background_image}
          rating={movie.rating}
          description={movie.description_full}
          genres={movie.genres}
        />
      )}
    </div>
  );
}
function MovieDetail({
  title,
  coverImg,
  rating,
  description,
  genres,
  backImg,
}) {
  return (
    <div>
      <div>
        <img src={coverImg} alt={title} />
        <img className="back-img" src={backImg} alt={title} />
      </div>
      <h1>{title}</h1>
      <h3>rating({rating}/10)</h3>
      <p className="description">{description}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}
export default Detail;
